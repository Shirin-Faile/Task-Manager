"use client";
import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import TaskForm from "@/Components/TaskForm";
import TaskList from "@/Components/TaskList";
import { Task } from "@/types/Task";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        try {
          setTasks(JSON.parse(savedTasks));
        } catch (error) {
          console.error('Error parsing tasks from localStorage:', error);
          localStorage.removeItem('tasks'); // Clean up if parsing fails
        }
      }
      setIsHydrated(true);
    }
  }, []); // Run only once on mount

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (typeof window !== 'undefined' && isHydrated) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isHydrated]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [task, ...prevTasks]); 
  };

  const toggleComplete = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // Render loading state while not hydrated
  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
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




