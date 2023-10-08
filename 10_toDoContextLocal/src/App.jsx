import { React, useEffect, useState } from 'react'
import { TodoProvider } from './context' 
import TodoForm from './component/TodoForm';
import TodoItem from './component/TodoItem';

function App() {
  const [todos,setTodos]=useState([]);

  //Name should be same as declared in TodoContext.js
  const addTodo=(todo)=>{
    //this todo should go to todos array
    // setTodos(todo) ->>> if only todos is passed then previous todos will be deleted so avoid it.
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])//it means that it will take all prvious value and add next
  }

  //const update todo
  const updateTodo=(id,todo)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }


  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }


  //Local storage
  //useEffect()  hook is used to take value from all previous value from local storage.
  useEffect(() => {
    //localStorage.getItem("todos")//it will give string as a result.
    const todos = JSON.parse(localStorage.getItem("todos"));//here converting the result from string to JSON formate
  
    if (todos && todos.length > 0) {
        setTodos(todos)
    }
  }, [])
  //another useEffect to set todos from ui to local storge. ie, when new todos is added
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    //note that JSON.stringify --> convert the todos to string 
  }, [todos])



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo)=>(
                    <div key={todo.id}
                    className='w-full'
                    >
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
        </div>
    </TodoProvider>
  )
}

export default App
