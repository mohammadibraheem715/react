import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [char, setchar] = useState(false)
  const [pswd, setpswd] = useState("")

  const pswdref = useRef(null)

  const pswdgen = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*()_+"

    for(let i = 1; i <= length; i++){
      let ch = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(ch)
    }

    setpswd(pass)

  },
  
  [length, num, char, setpswd])

  const copyclipboard = useCallback(() => {
    pswdref.current?.select()
    window.navigator.clipboard.writeText(pswd)
  }, [pswd])
  
  useEffect(() =>{
    pswdgen()
  }, [length,num, char, pswdgen])
  return (
    <>
    <div className = "w-full max-w-2xl mx-auto shadow-md rounded-lg px-9 py-3 my-9 text-green-500 bg-gray-700">
        <h1 className = "text-white text-center">Password Generator</h1>
      <div  className = "flex shadow rounded-lg overflow-hidden mb-4">
        <input type = "text"
        value = {pswd}
        className = "outline-none bg-white w-full py-1 px-3"
        placeholder = "Password"
        readOnly
        ref = {pswdref}
        />
  <button onClick = {copyclipboard}
  className = "outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
    copy
  </button>
    
      </div>
      <div className = "flex text-sm gap-x-2">
        <div className = "flex items-center gap-x-1">
          <input
          type = "range"
          min = {6}
          max = {100}
          value = {length}
          className = "cursor-pointer"
          onChange = {(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className = "flex items-center gap-x-1">
          <input
            type = "checkbox"
            defaultChecked = {num}
            id = "numberInput"
            onChange = {() => {
              setnum((prev) => !prev)
            }}
            />
            <label htmlFor = "numberInput">Numbers</label>
        </div>
        <div className = "flex items-center gap-x-1">
          <input
            type = "checkbox"
            defaultChecked = {char}
            id = "characterInput"
            onChange = {() => {
              setchar((prev) => !prev)
            }}
            />
            <label htmlFor = "charaterInput">Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
