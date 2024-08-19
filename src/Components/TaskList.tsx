import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@/types/Task";

interface TaskListProps {
    tasks: Task[];
    toggleComplete: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskList = ({ tasks, toggleComplete, deleteTask }: TaskListProps) => {
    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <TaskItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    />
                ))
              ) : (
                <p>No tasks available</p>
              )}
            </div>
          );
        };
        
        export default TaskList;