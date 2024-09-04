import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos}=props
  

  return (
    <div>
      {todos.map((todo, todoIndex)=>{
        return(
          <ul className='unorder'>
            <TodoCard {...props} index={todoIndex} key='todoIndex'>{todo}</TodoCard>
            
          </ul>
        )
      })}
    </div>
  )
}
