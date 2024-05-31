import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { IoSearchSharp } from "react-icons/io5";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()

  const handleAddTodo =(text) =>{
    dispatch(addTodo(text))
  }

  const handleAddTodoClick =() =>{
    if(newTodo.trim() !== ""){
      handleAddTodo(newTodo.trim())
      setNewTodo("")
    }
  }

  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase text-purple-800'>Personal todo app</h2>
      {/* add new task */}
      <div className='flex items-center mb-4'>
        <input value={newTodo} type="text" name="addTodoInput" id="addTodoInput" placeholder='Add new task' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' onChange={(e) => setNewTodo(e.target.value)}/>
        <button className='ml-4 p-2 bg-sky-300 hover:bg-sky-700 text-white rounded ' onClick={handleAddTodoClick}>< FaPlus  /></button>
      </div>

      {/* filter and search task */}
      <div>
        <div className='flex items-center mb-4'> 
          <input value={searchTerm} type="text" name="addSearchTerm" id="addSearchTerm" placeholder='Search task' className='flex-end p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className='ml-4 p-2 bg-sky-300 hover:bg-sky-700 text-white rounded ' onClick={handleAddTodoClick}>< IoSearchSharp  /></button>
        </div>
      </div>

    </div>
  )
}

export default Todo
