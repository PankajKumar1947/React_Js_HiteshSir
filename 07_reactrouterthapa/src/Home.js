import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './Component/Header'

const Home = () => {
  return (
    <>
        {/* <Header/>
        <h1>Home page</h1> */}

        {/* For nested routes:  Home page is shown in all pages that we don't want so prefer below */}
        <Header/>
        <Outlet/>

    </>
  )
}

export default Home