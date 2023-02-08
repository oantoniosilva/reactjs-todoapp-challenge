import { BiTrash } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

import styles from './Tasks.module.css';

export function Tasks({ id, content, isCompleted, onDeleteTask }) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <button 
          className={styles.buttonCheck}
          onClick={isCompleted}
        >
          <AiOutlineCheckCircle size={16} color="#808080" />
        </button>
          <p>{content}</p>
        <button 
          className={styles.buttonTrash}
          title='Delete task' 
          onClick={handleDeleteTask}
        >
          <BiTrash size={16} color="#808080" />
        </button>
      </div>
    </div>
  )
}