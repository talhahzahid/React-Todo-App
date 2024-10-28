import React, { useRef, useState } from 'react'

const App = () => {
  const inputt = useRef()
  const  [todo , setTodo] = useState([])
  const addTodo = (event) =>{
    event.preventDefault();
    console.log(inputt.current.value);
    todo.push(inputt.current.value)
    setTodo([...todo])
    inputt.current.value = ''
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
            <h1>{item}</h1>
          </div>
        })
      }
    </div>
  )
}

export default App