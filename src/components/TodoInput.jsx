import React, { useState } from 'react'


export default function TodoInput(props) {
  const {AddTodos, setvalue, setTodovalue}=props

  
  return (
    <div>
        <input value={setvalue} onChange={(e)=>{setTodovalue(e.target.value)}} type="text"  placeholder="write here" className='text'/>
        <button className='banter' onClick={()=>AddTodos(setvalue)}>
            ADD
        </button>
    </div>
  )
}
