"use client";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  // Obtener tareas
  useEffect(() => {
    fetch("http://localhost:8080/api/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
  }, []);

  // Agregar tarea
  const addTodo = async (newTodo) => {
    const response = await fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: newTodo.text,
        date: newTodo.date || null,
        time: newTodo.time || null,
        completed: false,
      }),
    });
    const savedTodo = await response.json();
    setTodos([...todos, savedTodo]);
  };

  // Eliminar tarea
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Marcar como completada
  const toggleComplete = async (id) => {
    const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "PUT",
    });
    const updatedTodo = await response.json();
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
      <main className="min-h-screen p-8 bg-gray-800">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Lista de cosas por hacer</h1>
          <TodoForm addTodo={addTodo} />
          <div className="mt-4 space-y-2">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
          </div>
        </div>
      </main>
  );
}