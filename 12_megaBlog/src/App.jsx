import React ,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';


function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=> setLoading(false));
  },[])

  return (
    <>
    
     <h1>A blog app with app write</h1>
     <Header/>
      <main>
        {/* Outlet from react router dom :TODO */}
        {
          !loading?<div>Loading....</div>: <div>Has been loaded</div>
        }
      </main>
     <Footer/>
    </>
  )
}

export default App
