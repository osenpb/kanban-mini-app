
import type { Task } from "../types/task.type";

export const states = ['To Do', 'In Progress', 'Done']




export const todoList: Task[] = [
  {
    id: "1",
    title: 'JPA',
    description: 'Tecnicas de implementacion avanzada de JPA',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: 'Unit Testing',
    description: 'Aprender TDD y unit testing con JUnit',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

]

export const inProgressList: Task[] = [
  {
    id: "4",
    title: 'WebSockets',
    description: 'Hacer app de chat con WebSockets',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: 'Cloud',
    description: 'Aprender fundamentos de AWS para despliegues',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const doneList: Task[] = [
  {
    id: "7",
    title: 'Typescript',
    description: 'Fortalecer fundamentos de TypeScript',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    title: 'OsenShop',
    description: 'terminar ecommerce',
    createdAt: new Date(),
    updatedAt: new Date(),
  } 
]

