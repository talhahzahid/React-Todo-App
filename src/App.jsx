import React, { useRef, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



const App = () => {
  const inputt = useRef()
  const  [todo , setTodo] = useState([])

  // add todo function 
  const addTodo = (event) =>{
    event.preventDefault();
    console.log(inputt.current.value);
    todo.push(inputt.current.value)
    setTodo([...todo])
    inputt.current.value = ''
  }

  // delete todo funtion 
  const deleteTodo = (index) =>{
    console.log('current' , index);
    todo.splice(index , 1)
    setTodo([...todo])
  }
  const editTodo = (index) =>{
    console.log('current' , index);
    
  }



  return (
    <div className='bg-[#272932] text-white h-[100vh]'>
      <h1 className='text-center text-white pt-10 text-xl'>Todo App</h1>
      <div className='text-center m-2' >
        <form onSubmit={addTodo} >
          <input type="text" placeholder='Enter Your Todo' className='p-2 w-3/6 text-center rounded-md text-black' ref={inputt} /> 
          <button type='submit' className='btn btn-primary m-3'>Add Todo</button>
        </form>
      </div>
      {
        todo.map((item,index)=>{
          return <div key={index}>
          <div className='flex justify-center items-center m-3'>
            <h1>{item}</h1>
            <h1>
            <button className=' m-3 btn btn-success' onClick={()=> editTodo(index)}><MdEdit /></button>
            <button className='btn btn-error' onClick={()=> deleteTodo(index)}><MdDelete /></button>
            </h1>
          </div>
          </div>
        })
      }
    </div>
  )
}

export default App