"use client";
import React, {useEffect, useState} from "react";
import Header from "@/Components/Header";
import TaskForm from "@/Components/TaskForm";
import TaskList from "@/Components/TaskList";
import { Task } from "@/types/Task";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [task, ...prevTasks]); 
  };

  const toggleComplete = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <Header/>
      <TaskForm addTask={addTask} />
      <TaskList
      tasks={tasks}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
      />
    </div>
  );
};

export default Home;
