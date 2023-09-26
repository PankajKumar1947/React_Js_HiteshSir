import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


const Contact = () => {
    const navi=useNavigate();
    const gotoHome=()=>{
        navi("/")
    }

  return (
    <>
        <div>Contact</div>
        <button onClick={gotoHome}>Go to Home Page</button>
    </>
    
  )
}

export default Contact