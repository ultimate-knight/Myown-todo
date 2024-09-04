import React, { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './index.css'


export default function App() {

  function persistent(newlist){
    localStorage.setItem('todos', JSON.stringify({todos: newlist}))
  }

  

  const [todos, setTodos]=useState([
  ])

  const [setvalue, setTodovalue]=useState('')


  useEffect(()=>{
    if(!localStorage){
      return
    }

    let localTodos=localStorage.getItem(todos);
    if(!localTodos){
      return
    }

    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])


  function AddTodos(newlist){
    const newtodo=[...todos, newlist ]
    setTodos(newtodo)
    persistent(newtodo)
    setTodovalue('')
  }

  function handleDeletedata(index){
    const Item=todos.filter((todo, todoIndex)=>{
      return todoIndex!==index
    })
    persistent(Item)
    setTodos(Item)    
  }

  function handleEditTodo(index){
    const Item=todos[index]
    setTodovalue(Item)
    handleDeletedata(index)
  }

  return (
    <div>
      <TodoInput setvalue={setvalue} setTodovalue={setTodovalue} AddTodos={AddTodos}></TodoInput>
      <TodoList handleEditTodo={handleEditTodo}  handleDeletedata={handleDeletedata} todos={todos}></TodoList>
    </div>
  )
}
