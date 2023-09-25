import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
 const [length,setLength]=useState(8);//useState() hooks used for slider
 const [numberAllowed,setNumberAllowed]=useState(false);//useState() used for number include(checkbox)
 const [charAllowed,setCharAllowed]=useState(false);//useState() used for character include(checkbox)
 const [password,setPassword]=useState("");//data showing in screen


//refHook  :->ref
const passwordRef=useRef(null);



//useCallback(function,[dependencies]) :-> it is a react hook that lets you cache a function defination between re-renders.
//first arg: function, second arg: array of dependencies.
 const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";//adding string
  if(numberAllowed){
    str+="0123456789";//adding number
  }
  if(charAllowed){
    str+="~#$%^&*()_+=-{}";//adding character
  }

  //loop to form password form string
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(char);
  }
  setPassword(pass);

 },[length,numberAllowed,charAllowed,setPassword])

//copy password
 const copyPassowrdToClipboard=useCallback(()=>{
  passwordRef.current?.select();//slect
  passwordRef.current?.setSelectionRange(0,20)//slect only 20 values
  //copy to clipboard
  window.navigator.clipboard.writeText(password);
 },[password])


 //anothre hooks as directly called passwordGenerator function runs infinite loop
 useEffect(()=>{
  passwordGenerator();
 },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassowrdToClipboard}
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor='numberInput'>Characters</label>
          </div>
        </div>

      </div>

      
    </>
  )
}

export default App
