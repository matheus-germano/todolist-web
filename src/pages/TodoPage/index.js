import React,{ useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import Task from '../../components/Task'

import styles from '../../styles/pages/Home.module.scss'

export default function Index() {
  const [task, setTask] = useState('')
  const [deadline, setDeadline] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (event) => {
    if(event.target.name === 'task') {
      setTask(event.target.value)
    }
    else {
      setDeadline(event.target.value)
    }
  }

  const addTask = () => {
    if(task != '' && deadline != '') {
      const newTask = { task: task, deadline: deadline }
      setTodoList([ ...todoList, newTask ])
      setTask('')
      setDeadline('')
    }
    else {
      window.alert('Por favor, preencha os dados corretamente!')
    }
  }

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoHeader}>
        <h1>Todo List</h1>
        <div className={styles.todoInputs}>
          <input 
            type="text" 
            name="task" 
            className={styles.todoInput}
            placeholder="Insira sua tarefa"
            autocomplete="off"
            value={task}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="deadline"
            className={styles.todoInput}
            placeholder="Data limite"
            autocomplete="off"
            value={deadline}
            onChange={handleChange}
          />
          <button className={styles.todoButton} onClick={addTask}><AiOutlinePlusCircle/></button>
        </div>
      </div>
      
      <div className={styles.todoList}>
        { todoList != '' ? (todoList.map((task, key) => {
          return(
            <Task key={key} task={task} />
          )
        })) : <p>Nenhuma tarefa adicionada até o momento!</p> }
      </div>
    </div>
  )
}
