
import { useState, useCallback, useEffect,useRef } from 'react'



function App() {
  //const [count, setCount] = useState(0)

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  // Use of useRef hook
  const passwordRef = useRef(null)

  //Password Generator logic
  const passwordGenerator = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str+= '0123456789'
    if (specialCharAllowed) str+= '!@#$%^&*(){}[]_-+=,.<>?/'

    for (let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random()*str.length+ 1)
      password += str.charAt(char)
    }
    setPassword(password)
  }, [length,numberAllowed, specialCharAllowed, setPassword])


  // Copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password)
  

  // Set copied state to true to trigger the animation
  setCopied(true);

  //Reset copied state after 2 seconds
   /*setTimeout(() => {
     setCopied(false);
   }, 2000);*/
   setCopied(true);
  },[password,length]);



  //Regenerate password whenever dependencies change
  useEffect(() => { 
    /*passwordGenerator()
  },[length,numberAllowed, specialCharAllowed,passwordGenerator])*/
  passwordGenerator();
  setCopied(false);
  },[length,numberAllowed, specialCharAllowed,passwordGenerator])

  return (
    <>
      

      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 '>

      <h1 className='text-center text-4xl text-white my-3'>Password Generator</h1>

        <div className='flex shadow overflow-hidden mb-4 rounded-lg gap-2'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 rounded-lg'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          /* className='outline-none bg-blue-700 text-white px-3 py0.5 shrink-0'*/
          className={`outline-none px-3 py-0.5 shrink-0 rounded-lg text-white transition duration-300 ${
            copied ? 'bg-green-500' : 'bg-blue-700 hover:bg-blue-600'
          }`}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="numberAllowed"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="specialCharAllowed"
            defaultChecked={specialCharAllowed}
            onChange={() => {
              setSpecialCharAllowed((prev) => !prev);
            }}
            />
            <label >Special Characters</label>
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default App
