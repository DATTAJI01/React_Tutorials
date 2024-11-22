import { useState } from "react";



function App() {

  let [counter, setcounter] = useState(7)
  
  //let counter = 15

  const addValue = () => {
    if(counter>=20) return
    //console.log('Add btn is clicked', counter),
    setcounter(counter=counter+1);
  }

  const removeValue = () => {
    if (counter<=0) return
    //console.log('Remove btn is clicked', counter)
    setcounter(counter=counter-1);
  }

  return (
    <>
    <nav>{counter}</nav>
      <h1>CHAI AND REACT | {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>

      <footer>{counter}</footer>
    </>
  )
}

export default App
