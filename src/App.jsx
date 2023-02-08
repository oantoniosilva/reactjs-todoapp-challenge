import './global.css'
import styles from "./App.module.css";

import { Header } from './components/Header';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from 'react';
import { Tasks } from './components/Tasks';

export function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const counterTasks = tasks.length;
  // const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleCreateNewTask() {
    event.preventDefault()
    
    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }
  
  function handleNewTaskChange() {

    setNewTaskText(event.target.value)

  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeleteOne)
  }

  return (
    <>
      <Header />

      <div className={styles.container}>
        <form 
          onSubmit={handleCreateNewTask}
          className={styles.content}
        >
          <input
            name="tasks" 
            type="text" 
            placeholder="Add a new task"
            value={newTaskText} 
            onChange={handleNewTaskChange}
            // onInvalid={handleNewTaskInvalid}
            required  
          />

          <button 
            // onClick={handleCounterTask}
            type="submit" 
            // disabled={isNewTaskEmpty}
          >
            Create <AiOutlinePlusCircle size={16} color="#f2f2f2" title='Button add task' />
          </button>
        </form>

        <div className={styles.preview}>
          <div className={styles.create}>
            <p>Created tasks</p>
            <span>{counterTasks}</span>
          </div>

          <div className={styles.completed}>
            <p>Completed</p>
            <span>{} de {counterTasks}</span>
          </div>
        </div>

        <div>
          {tasks.map(task => {
            return (
              <Tasks 
                key={task} 
                content={task} 
                onDeleteTask={deleteTask} 
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
