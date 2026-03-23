
import { useDroppable } from "@dnd-kit/core";
import type { Task } from "../types/task.type";
import TodoCard from "./TodoCard";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

type Props = {
  id: string;
  title: string;
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export default function ColumnTask({ id, title, tasks, onDeleteTask, onEditTask }: Props) {


  const { setNodeRef, } = useDroppable({
    id: id,
  })

  const columnColors: Record<string, string> = {
    toDo: "bg-zinc-50 dark:bg-zinc-800",
    inProgress: "bg-blue-50 dark:bg-blue-900/30",
    done: "bg-green-50 dark:bg-green-900/30",
  };

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 ${columnColors[id] || "bg-zinc-50 dark:bg-zinc-800"} p-4 rounded-xl flex flex-col gap-3 min-h-[200px]`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-700 dark:text-zinc-200">{title}</h2>
        <span className="bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-medium px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>

      <SortableContext
        items={tasks.map(task => task.id)}
        strategy={verticalListSortingStrategy}
      >
      {tasks.map((task) => (
        <TodoCard
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onEdit={onEditTask}
        />
      ))}
      </SortableContext>
    </div>
  )
}
