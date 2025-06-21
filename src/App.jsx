import { useState } from 'react';
import './App.css'
import { Dice } from './components/Dice/Dice'
import { Field } from './components/field/field'

function App() {
    const [position, setPosition] = useState(1);
    const [currentValue, setCurrentValue] = useState(null);
    const rollDice = () => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setCurrentValue(randomValue);
      setPosition(pos => (pos + randomValue) % 20);
    }
    console.log(currentValue)
  return ( 
  <div className='container'>
    <Field position={position}/>
    <Dice currentValue={currentValue}/>
    <button onClick={() => rollDice()}>Roll</button>
  </div>
  )
}

export default App
