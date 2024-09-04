import React from 'react'

export default function TodoCard(props) {
  let {children, handleDeletedata, handleEditTodo,  index}=props
  return (
    <div>
      <li  className='ordername'>
        {children}
        <button className='edut' >
        <i className="fa-solid fa-pen-to-square" onClick={()=>handleEditTodo(index)}></i>
        </button>
        <button className='bin' onClick={()=>handleDeletedata(index)}>
        <i className="fa-solid fa-trash"></i>
        </button>

        
        </li>
      
    </div>
  )
}
