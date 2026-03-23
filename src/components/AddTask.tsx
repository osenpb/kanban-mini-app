import { useState, type FormEvent } from "react";

interface AddTaskProps {
  onAddTask: (title: string, description: string) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  }

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl m-4">
      <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-3">Add new task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="task-title" className="text-sm text-zinc-600 dark:text-zinc-400">Title</label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="task-description" className="text-sm text-zinc-600 dark:text-zinc-400">Description</label>
          <input
            id="task-description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button 
          type="submit" 
          className="bg-gray-300 dark:bg-zinc-600 hover:bg-gray-500 dark:hover:bg-zinc-500 text-white font-medium py-2 px-4 rounded-xl transition-all mt-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}