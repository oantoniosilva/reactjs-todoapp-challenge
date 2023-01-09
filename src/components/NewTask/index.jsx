import { useState } from "react";
import { Tasks } from "../Tasks";

import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./NewTask.module.css";


export function NewTask({ content }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }
  
  return (
    <div className={styles.container}>
      <form 
        onSubmit={handleCreateNewTask}
        className={styles.content}
      >
        <input
          name="tasks" 
          type="text" 
          placeholder="Add a new task"
          value={newTask} 
          onChange={handleNewTaskChange}  
        />

        <button type="submit">
          Create <AiOutlinePlusCircle size={16} color="#f2f2f2" />
        </button>
      </form>

      <div className={styles.preview}>
        <div className={styles.create}>
          <p>Created tasks</p>
          <span>5</span>
        </div>

        <div className={styles.completed}>
          <p>Completed</p>
          <span>2 de 5</span>
        </div>
      </div>

      <div>
        {tasks.map(task => {
          return <Tasks key={task} content={task} />
        })}
      </div>
    </div>
  )
}