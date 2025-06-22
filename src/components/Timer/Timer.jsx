import { useEffect, useState } from "react"

export const Timer = ({addShot}) => {
    const [timer, setTimer] = useState(29 * 60);

    const hours = Math.floor(timer / 3600).toString().padStart(2, '0');
    const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
    const seconds = (timer % 60).toString().padStart(2, '0');
    
    
    useEffect(() => {
        if (timer === 0) {
            addShot();
            setTimer(29 * 60); 
            return;
        }
        const timerInterval = setInterval(() => {
        setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timerInterval);
    }, [timer, addShot]);
    return <div className="border-2 border-[#FFFFFF33] px-2 py-1.5 rounded-lg">
        <span className="font-bold text-sm text-[#FFFFFF99]">
            {hours}:{minutes}:{seconds}
        </span>
    </div>
}