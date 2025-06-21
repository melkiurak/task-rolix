import Cash from '@img/Field/Cash.png';
import Dice from '@img/Field/Dice.png';
import Gem from '@img/Field/Gem.png';
import Goods from '@img/Field/Goods.png';
import Material from '@img/Field/Materials.png';
import Random from '@img/Field/Random.png';
import Resource from '@img/Field/Resource.png';
import Star from '@img/Field/Star.png';
import Vip from '@img/Field/Vip.png';
import { useState } from 'react';
export const Field = ({position}) => {
    const [activeCell, setActiveCell] = useState(false);
    const cells = [
        { cell: 1, area: '1 / 1 / 2 / 2', imgSrc: Gem },
        { cell: 2, area: '2 / 1 / 3 / 2', imgSrc: Resource },
        { cell: 3, area: '3 / 1 / 4 / 2', imgSrc: Dice },
        { cell: 4, area: '4 / 1 / 5 / 2', imgSrc: Cash },
        { cell: 5, area: '5 / 1 / 6 / 2', imgSrc: Goods },
        { cell: 6, area: '6 / 1 / 7 / 2', imgSrc: Star },
        { cell: 7, area: '6 / 2 / 7 / 3', imgSrc: Material },
        { cell: 8, area: '6 / 3 / 7 / 4', imgSrc: Vip },
        { cell: 9, area: '6 / 4 / 7 / 5', imgSrc: Cash },
        { cell: 10, area: '6 / 5 / 7 / 6', imgSrc: Random },
        { cell: 11, area: '6 / 6 / 7 / 7', imgSrc: Gem },
        { cell: 12, area: '5 / 6 / 6 / 7', imgSrc: Resource },
        { cell: 13, area: '4 / 6 / 5 / 7', imgSrc: Dice },
        { cell: 14, area: '3 / 6 / 4 / 7', imgSrc: Cash },
        { cell: 15, area: '2 / 6 / 3 / 7', imgSrc: Goods },
        { cell: 16, area: '1 / 6 / 2 / 7', imgSrc: Star },
        { cell: 17, area: '1 / 5 / 2 / 6', imgSrc: Material },
        { cell: 18, area: '1 / 4 / 2 / 5', imgSrc: Vip },
        { cell: 19, area: '1 / 3 / 2 / 4', imgSrc: Cash },
        { cell: 20, area: '1 / 2 / 2 / 3', imgSrc: Random },
    ];
    const chipSteps = cells[position - 1]?.area;
    
    return <div className='max-w-[346px] w-full h-[346px] m-auto'>
        <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full relative">
            {cells.map((cell, i) => (
                <div key={i} className="cell hover-bg-gradient-img" style={{gridArea: cell.area,}}>
                    <img src={cell.imgSrc} alt="" />
                </div>
            ))}
            <div className="absolute transition-all duration-300 z-10" style={{gridArea: chipSteps, }}>Я фишка {position}</div>
        </div>
    </div>
}