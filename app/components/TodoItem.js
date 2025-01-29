export default function TodoItem({ todo, deleteTodo, toggleComplete }) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow-sm">
            <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className="w-4 h-4"
                    />
                    <span className={todo.completed ? "line-through text-green-700" : ""}>
                        {todo.text}
                    </span>
                </div>
                {(todo.date || todo.time) && (
                    <div className="ml-7 text-sm text-gray-400">
                        {todo.date && <span>Fecha: {todo.date}</span>}
                        {todo.time && <span> Hora: {todo.time}</span>}
                    </div>
                )}
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-400 hover:text-red-600"
            >
                Eliminar
            </button>
        </div>
    );
}