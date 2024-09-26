import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

<h1>Contagem!</h1>

function App() {


    const [count, setCount] = useState(0);
  
    function incrementar() {
      setCount(count + 1);
    }
  
    function decrementar() {
      setCount(count - 1);
    }
  
    return (
      <> 
        <button onClick={incrementar}>+</button>
        <h1>{count}</h1>
        <button onClick={decrementar}>-</button>
      </>
    );
  }
  

export default App
