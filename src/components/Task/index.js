import React from 'react'

import {MdDelete} from 'react-icons/md'

import styles from '../../styles/components/Task.module.scss'

export default function index({ task, deleteTask }) {

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfo}>
        <p className={styles.taskDescription}>{task.task}</p>
        <p className={styles.taskDate}>{task.deadline} dias</p>
      </div>
      <button className={styles.deleteButton} onClick={() => { deleteTask(task.task) }}><MdDelete/></button>
    </div>
  )
}
