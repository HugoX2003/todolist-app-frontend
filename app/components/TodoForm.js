import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            addTodo({
                text: description,
                date,
                time
            });
            setDescription("");
            setDate("");
            setTime("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción de la tarea (obligatorio)"
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-950"
                required
            />
            <div className="flex gap-2">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-950 flex-1"
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-950 flex-1"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition-colors"
            >
                Agregar
            </button>
        </form>
    );
}