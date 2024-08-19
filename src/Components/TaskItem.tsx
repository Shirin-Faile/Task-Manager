import React from "react";
import styles from '../styles/TaskItem.module.scss';
import { Task } from "@/types/Task";

interface TaskItemProps {
    task: Task;
    toggleComplete: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask}) => {
    return (
        <div className={styles.taskContainer}>
            <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                />
                <span>{task.text}</span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;