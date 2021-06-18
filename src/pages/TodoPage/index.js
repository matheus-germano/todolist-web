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
    // Verifica se os campos nao estao vazios
    if(task !== '' && deadline !== '') {      
      const newTask = { task: task, deadline: deadline }
      const search = todoList.filter((task) => task.task === newTask.task)

      // verifica se tarefa já existe
      if(search.length !== 0) {
        window.alert('Tarefa já adiciona, por favor insira uma diferente.')
        setTask('')
        setDeadline('')

        return;
      }
      else {
        // seta a nova tarefa no vetor e limpa os campos.
        setTodoList([ ...todoList, newTask ])
        setTask('')
        setDeadline('')
      }
    }
    else {
      window.alert('Por favor, preencha os dados corretamente!')
    }
  }

  const deleteTask = (taskToDelete) => {
    // A partir do filtro você seta na variavel todas as
    // tarefas ja existentes diferentes da que foi pedida para ser deletada.
    setTodoList(todoList.filter((task) => {
      // Retorna toda task diferente da passada na função.
      return task.task !== taskToDelete;
    }))
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
        {/* Verifica se a lista de tarefas esta vazia */}
        { todoList !== '' ? (todoList.map((task, key) => {
          return(
            <Task key={key} task={task} deleteTask={deleteTask} />
          )
        })) : <p>Nenhuma tarefa adicionada até o momento!</p> }
      </div>
    </div>
  )
}
