//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  //const [count, setCount] = useState(0)
    
  
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>

     <Card username ='yo' price = 'N/A' code = '11223' />

     <Card username='jo' price='$500' code='12345' />
          

    </>
  )
}

export default App
