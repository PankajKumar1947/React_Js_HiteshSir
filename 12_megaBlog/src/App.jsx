import { useState } from 'react'


function App() {
  //access and printing from .env
  // console.log(process.env.REACT_APP_APPWRITE_URL); --> valid for react

  //access and printing environment variable in React Vite App
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
     <h1>A blog app with app write</h1>
    </>
  )
}

export default App
