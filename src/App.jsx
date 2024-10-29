import React, { useRef, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



const App = () => {
  const inputt = useRef()
  const [todo, setTodo] = useState([])

  // add todo function 
  const addTodo = (event) => {
    event.preventDefault();
    console.log(inputt.current.value);
    todo.push(inputt.current.value)
    setTodo([...todo])
    inputt.current.value = ''
  }

  // delete todo funtion 
  const deleteTodo = (index) => {
    console.log('current', index);
    todo.splice(index, 1)
    setTodo([...todo])
  }

  // edit todo function 
  const editTodo = (index) => {
    console.log('current', index);
    const updateVal = prompt('Enter Updated Value')
    todo.splice(index , 1 , updateVal)
    setTodo([...todo])
  }



  return (
    <div className='bg-[#272932] text-white h-[200vh]'>
      <h1 className='text-center text-white pt-10 text-xl'>Todo App</h1>
      <div className='text-center m-2' >
        <form onSubmit={addTodo} >
          <input type="text" placeholder='Enter Your Todo' className='p-2 w-3/6 text-center rounded-md text-black' ref={inputt} />
          <button type='submit' className='btn btn-primary m-3'>Add Todo</button>
        </form>
      </div>
      {
  todo.map((item, index) => (
    <div key={index} className='m-4'>
      <div className='bg-white w-full max-w-md m-auto text-black text-center p-4 rounded shadow'>
        <div className='flex justify-between items-center flex-wrap'>
          <h1 className='font-semibold'>{item}</h1>
          <div className='flex items-center'>
            <button
              className='m-2 btn btn-success rounded'
              onClick={() => editTodo(index)}
            >
              <MdEdit />
            </button>
            <button
              className='m-2 btn btn-error rounded'
              onClick={() => deleteTodo(index)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
        <hr className='border-y-lime-500' />
      </div>
    </div>
  ))
}

    </div>
  )
}

export default App