import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { doneList, inProgressList, todoList } from "../data/data";
import type { Task } from "../types/task.type";
import ColumnTask from "./ColumnTask";
import AddTask from "./AddTask";
import EditTaskModal from "./EditTaskModal";

type Columns = {
  [key: string]: Task[];
};

export default function Board() {

  const [columns, setColumns] = useState<Columns>({
    toDo: todoList,
    inProgress: inProgressList,
    done: doneList,
  });

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    setColumns(prev => {
      const newColumns = { ...prev };

      const sourceColumnKey = Object.keys(newColumns).find(col =>
        newColumns[col].some((task) => task.id === active.id)
      );

      if (!sourceColumnKey) return prev;

      const targetColumnKey = Object.keys(newColumns).find(col =>
        newColumns[col].some((task) => task.id === over.id) || col === over.id
      );

      if (!targetColumnKey) return prev;

      const sourceColumn = newColumns[sourceColumnKey];
      const taskIndex = sourceColumn.findIndex((task) => task.id === active.id);
      const task = sourceColumn[taskIndex];

      if (!task) return prev;

      if (sourceColumnKey === targetColumnKey) {
        const oldIndex = sourceColumn.findIndex((t) => t.id === active.id);
        const newIndex = sourceColumn.findIndex((t) => t.id === over.id);

        if (oldIndex === newIndex || newIndex === -1) return prev;

        newColumns[sourceColumnKey] = arrayMove(sourceColumn, oldIndex, newIndex);
      } else {
        newColumns[sourceColumnKey] = sourceColumn.filter((t) => t.id !== active.id);

        const overIndex = newColumns[targetColumnKey].findIndex((t) => t.id === over.id);
        const newTaskList = [...newColumns[targetColumnKey]];
        
        if (overIndex === -1) {
          newTaskList.push(task);
        } else {
          newTaskList.splice(overIndex, 0, task);
        }
        
        newColumns[targetColumnKey] = newTaskList;
      }

      return newColumns;
    });
  }

  function handleAddTask(title: string, description: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setColumns(prev => ({
      ...prev,
      toDo: [newTask, ...prev.toDo],
    }));
  }

  function handleDeleteTask(taskId: string) {
    setColumns(prev => {
      const newColumns = { ...prev };
      for (const key of Object.keys(newColumns)) {
        newColumns[key] = newColumns[key].filter(task => task.id !== taskId);
      }
      return newColumns;
    });
  }

  function handleEditTask(task: Task) {
    setSelectedTask(task);
  }

  function handleSaveEditTask(taskId: string, title: string, description: string) {
    setColumns(prev => {
      const newColumns = { ...prev };
      for (const key of Object.keys(newColumns)) {
        const taskIndex = newColumns[key].findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
          newColumns[key][taskIndex] = {
            ...newColumns[key][taskIndex],
            title,
            description,
            updatedAt: new Date(),
          };
          break;
        }
      }
      return newColumns;
    });
    setSelectedTask(null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-full">
        <AddTask onAddTask={handleAddTask} />
        <div className="grid grid-cols-3 gap-4 p-4 flex-1">
          <ColumnTask id="toDo" title="To Do" tasks={columns.toDo} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
          <ColumnTask id="inProgress" title="In Progress" tasks={columns.inProgress} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
          <ColumnTask id="done" title="Done" tasks={columns.done} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
        </div>
      </div>
      {selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onSave={handleSaveEditTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </DndContext>
  );
}
