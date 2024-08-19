import React, {useState, FormEvent} from "react";
import styles from '../styles/Taskform.module.scss'
import { Task } from "@/types/Task";

interface TaskFormProps {
    addTask: (task: Task) => void;
}

const TaskForm = ({ addTask }: TaskFormProps) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (taskText.trim() === '') return;
        const newTask: Task = {
            id: Date.now().toString(),
            text:taskText,
            completed: false,
        };
        addTask(newTask);
        setTaskText('');
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input 
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Add a new task"
             />
             <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;