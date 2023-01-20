import React from 'react'
import styles from "../css/style.module.css";


function Form({todo, setTodo, todoList, setTodoList}) {

    const handleChange = (event) => {
        setTodo(event.target.value);
        console.log("todo:", todo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, todo])
        console.log("todoList", todoList)
    }



  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} className={styles.todoInput} placeholder='Add to do List'></input>
        <button type="submit" className={styles.todoButton}>Add</button>
      </form>
    </div>
  )
}

export default Form
