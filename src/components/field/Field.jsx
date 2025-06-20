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
export const Field = () => {
    const [activeCell, setActiveCell] = useState(false);
    const cells = [
        { area: '1 / 1 / 2 / 2', imgSrc: Gem },
        { area: '2 / 1 / 3 / 2', imgSrc: Resource },
        { area: '3 / 1 / 4 / 2', imgSrc: Dice },
        { area: '4 / 1 / 5 / 2', imgSrc: Cash },
        { area: '5 / 1 / 6 / 2', imgSrc: Goods },
        { area: '6 / 1 / 7 / 2', imgSrc: Star },
        { area: '6 / 2 / 7 / 3', imgSrc: Material },
        { area: '6 / 3 / 7 / 4', imgSrc: Vip },
        { area: '6 / 4 / 7 / 5', imgSrc: Cash },
        { area: '6 / 5 / 7 / 6', imgSrc: Random },
        { area: '6 / 6 / 7 / 7', imgSrc: Gem },
        { area: '5 / 6 / 6 / 7', imgSrc: Resource },
        { area: '4 / 6 / 5 / 7', imgSrc: Dice },
        { area: '3 / 6 / 4 / 7', imgSrc: Cash },
        { area: '2 / 6 / 3 / 7', imgSrc: Goods },
        { area: '1 / 6 / 2 / 7', imgSrc: Star },
        { area: '1 / 5 / 2 / 6', imgSrc: Material },
        { area: '1 / 4 / 2 / 5', imgSrc: Vip },
        { area: '1 / 3 / 2 / 4', imgSrc: Cash },
        { area: '1 / 2 / 2 / 3', imgSrc: Random },
    ];
    return <div className='max-w-[346px] w-full h-[346px] m-auto'>
        <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full">
            {cells.map((cell, i) => (
                <div key={i} className="cell hover-bg-gradient-img" style={{gridArea: cell.area,}}>
                    <img src={cell.imgSrc} alt="" />
                </div>
            ))}
        </div>
    </div>
}