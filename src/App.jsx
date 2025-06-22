import { useState } from 'react';
import './App.css'
import balance from '@img/balance.png'
import { FaPlus } from "react-icons/fa";
import { Timer } from './components/Timer/Timer';
import { Shots } from './components/Shots/Shots';
import { Field } from './components/field/Field';


function App() {
  const totalShots = 10;
  const [position, setPosition] = useState(1);
  const [currentValue, setCurrentValue] = useState(null);
  const [maxShots, setMaxShots] = useState(totalShots);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (maxShots === 0 || rolling) {
      alert('У вас закінчилися кидки!');
      return;
    }
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setCurrentValue(randomValue);
    setMaxShots(maxShots - 1);
    setRolling(true);

    let stepsTaken = 0;
    const interval = setInterval(() => {
      stepsTaken++;
      setPosition(pos => (pos % 20) + 1);
      if (stepsTaken === randomValue) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 300); 
  };

  const addShot = () => {
    setMaxShots(prev => Math.min(prev + 1, totalShots))
  }
  return ( 
  <div className="wrapper">
    <Shots maxShots={maxShots} totalShots={totalShots}/>
    <Timer addShot={addShot}/>
    <Field position={position} currentValue={currentValue}/>
    <div className='flex items-center gap-2'>
      <img src={balance} alt="" />
      <h1>{Number.isFinite(maxShots) ? maxShots : 0}</h1>      
      <button className='bg-[#FFFFFF66] w-6 h-6 rounded-4xl flex items-center justify-center'>
        <FaPlus className='text-sm'/>
      </button>
    </div>
    <button className="container roll-btn"  onClick={() => rollDice()} disabled={maxShots === 0 || rolling}>
      <h3>Roll</h3>
    </button>
  </div>
  )
}

export default App
