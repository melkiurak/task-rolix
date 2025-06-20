import { useState } from 'react';
import './App.css'
import { Dice } from './components/Dice/Dice'
import { Field } from './components/field/field'

function App() {
    const [currentValue, setCurrentValue] = useState(1);
    const rollDuce = () => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setCurrentValue(randomValue);
    }
  return ( 
  <div className='container'>
    <Field/>
    <Dice currentValue={currentValue}/>
    <button onClick={() => rollDuce()}>Roll</button>
  </div>
  )
}

export default App
