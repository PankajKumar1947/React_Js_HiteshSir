//importing 
import Chai from "./chai"

function App() {
  const username="username: chai aur code"
  return (
    <div>
       <h1>Chai aur code with vite {username}</h1>
       {/* {username} -->it must be evaluated expression: here we cannot for or if etc equation. */}
    <Chai/>
    <h1>This should be wrapped</h1>
    </div>
    //note that: <div></div> may be written as <>Some other tag </> it is called fragment there will no be any error.
    
  )
}

export default App
