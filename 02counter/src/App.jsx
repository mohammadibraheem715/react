import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let[counter,change]=useState(17)
   const addValue=()=>{
    change(counter+1)
   }
   const removeValue=()=>
   {
    change(counter-1)
   }
  return (
    <>
    <h1>Classroom of the Elite</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}
    
export default App
