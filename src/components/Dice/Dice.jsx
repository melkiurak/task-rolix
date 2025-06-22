import { motion } from "motion/react";
import dice1 from '@img/Dice/Value=1.png';
import dice2 from '@img/Dice/Value=2.png';
import dice3 from '@img/Dice/Value=3.png';
import dice4 from '@img/Dice/Value=4.png';
import dice5 from '@img/Dice/Value=5.png';
import dice6 from '@img/Dice/Value=6.png';
import animationDice1 from '@img/Dice/Property 1=1.png'
import animationDice2 from '@img/Dice/Property 1=2.png'
import animationDice3 from '@img/Dice/Property 1=3.png'
import { useEffect, useState } from 'react';
export const Dice = ({currentValue}) => {
    const [animation,setAnimation] = useState(true);
    const [frameIndex, setFrameIndex] = useState(0);

    const diceImg = [
        {id: 1, img: dice1, alt: 'Dice with number one'},
        {id: 2, img: dice2, alt: 'Dice with number two'},
        {id: 3, img: dice3, alt: 'Dice with number three'},
        {id: 4, img: dice4, alt: 'Dice with number four'},
        {id: 5, img: dice5, alt: 'Dice with number five'},
        {id: 6, img: dice6, alt: 'Dice with number six'},
    ]

    const animationSequence  = [animationDice1, animationDice2, animationDice3]
    
    useEffect(() => {
        if (!currentValue || currentValue < 1 || currentValue > 6) return;

        setAnimation(true);
        setFrameIndex(0);

        const interval = setInterval(() => {
            setFrameIndex(prev => {
                if (prev === animationSequence.length - 1) {
                    clearInterval(interval);
                    setAnimation(false); 
                    return prev;
                }
                return prev + 1;
            });
        }, 200);
        
        return () => clearInterval(interval);
    }, [currentValue]);

    if (!currentValue || currentValue < 1 || currentValue > 6) {
        return null; 
    } 
    return <div  className="w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {animation ? (
            <motion.img key={frameIndex} src={animationSequence[frameIndex]} alt="Dice animation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="w-20 h-20"/>
        ) : (
            <motion.img src={diceImg[currentValue - 1].img} alt={diceImg[currentValue - 1].alt} className="w-full h-full" initial={{ scale: 1, y: 0 }} animate={{ scale: 1.15, y: -10 }} transition={{ duration: 0.8, ease: "easeOut" }}/>
        )}
    </div>
}