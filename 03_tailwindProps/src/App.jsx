import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
  //object
  let myObj={
    username:"pankaj",
    age:21
  }

  //array
  let newArr=[1,2,3]


  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl px-5 font-bold'>Tailwind Test</h1>
      <Card userName="chaiaurcode" btnText="Click Me"/>
      <Card userName="hitesh" btnText="NewClickMe"/>
      <Card userName="Pankaj" />
      {/* Here value of btnText is not passed so it will take dafault value set in card.jsx */}
      
    </>
  )
}

export default App
