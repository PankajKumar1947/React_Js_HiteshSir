import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'



function MyApp(){
    return(
        <div>
            <h1>Custom App | Chai aur code</h1>
        </div>
    )
}

// const ReactElement={
//     type:'a',//type determin the type of tag used
//     props:{//props determine properties return object
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// } //why it is not running?
//Ans: there is some rule according to which react work.

const anotherElement=(
    <a href='https://google.com' target='_blank'>visit google</a>
)

const anotherUser="chai aur react"

const ReactElement=React.createElement(
    'a',//first parm: tah name
    {href:'https://google.com',target:"_blank"},'click me to visit google',
    anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    
    //<MyApp/>
    //MyApp() :--> can be called in this manner because MyApp is a function. but we should not use it .
    //App()

    // anotherElement
     ReactElement

    
)
