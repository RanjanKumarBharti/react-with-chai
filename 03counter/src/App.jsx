import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = function(){
    if(counter == 15){
      return counter
    }else{
      setCounter((prev)=>prev+1)
      setCounter((prev)=>prev+1)
      setCounter((prev)=>prev+1)
      setCounter((prev)=>prev+1)
    }
    console.log(counter)
  }

  const removeValue = function(){
    if(counter == 0){
      return counter;
    }else{
      setCounter(counter-1)
      console.log("Removed : ",counter)
    }
  }
  return (
    <>
     <h1>Hello world !</h1>
     <h2>Count value:{counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App;