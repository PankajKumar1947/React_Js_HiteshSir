import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const About = () => {

    // navigate hook allows us to navigate from one page to another 
        const navigate=useNavigate();

        const goToContact=()=>{
            navigate("/contact")
            //navigate(-1) ;-> used to go back to previous page
        }

  return (
    <>  
    <section>
        <h1>About Page</h1>
        <button onClick={()=>goToContact()}>Go to Contact Page</button>
        {/* button to visit previous page */}
        <button onClick={()=>{
            navigate(-1);
            }}>Go back</button>
    </section>
</>
    
  )
}

export default About