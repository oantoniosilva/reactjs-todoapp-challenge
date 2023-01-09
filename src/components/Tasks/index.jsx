import { BiTrash } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

import styles from './Tasks.module.css';

export function Tasks({ content }) {
  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <AiOutlineCheckCircle size={16} color="#808080" />
          <p>{content}</p>
        <BiTrash size={16} color="#808080" />
      </div>
    </div>
  )
}