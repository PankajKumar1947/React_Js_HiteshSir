import { useState } from 'react'//bring hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //using hooks
  let [counter,setCounter]=useState(5)//anything can be passed as argument
  //useState() --> return array of 2 size. first-> counter, second-> function
  //setCounter is a method wich control to update the counter varibale

  //let counter=5;

  const addValue=()=>{
    if(counter+1<=20)
        counter=counter+1;
    setCounter(counter);
    // console.log('clicked');
    // console.log(counter);
    //what's update is done are not control by us . React control itself;
    //React react on variable updation
    //b
  }
  const removeValue=()=>{
    // counter=counter-1;
    // setCounter(counter);
    //or
    //setCounter(counter-1);
    //some modifications: counter should not decrease lesser than 0
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value </button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
