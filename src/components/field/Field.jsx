import Cash from '@img/Field/Cash.png';
import DiceImg from '@img/Field/Dice.png';
import Gem from '@img/Field/Gem.png';
import Goods from '@img/Field/Goods.png';
import Material from '@img/Field/Materials.png';
import Random from '@img/Field/Random.png';
import Resource from '@img/Field/Resource.png';
import Star from '@img/Field/Star.png';
import Vip from '@img/Field/Vip.png';
import { Dice } from '../Dice/Dice';
export const Field = ({position,currentValue}) => {
    const cells = [
        { cell: 1, area: '1 / 1 / 2 / 2', imgSrc: Gem, text: '', activeClass: 'hover-bg-gradient-purple', type: 'Start' },
        { cell: 2, area: '2 / 1 / 3 / 2', imgSrc: Resource, text: '', activeClass: 'hover-bg-gradient-green', type: 'Gold' },
        { cell: 3, area: '3 / 1 / 4 / 2', imgSrc: DiceImg, text: '', activeClass: 'hover-bg-gradient-purple', type: 'Dice' },
        { cell: 4, area: '4 / 1 / 5 / 2', imgSrc: Cash, text: '', activeClass: 'hover-bg-gradient-green', type: 'Cash' },
        { cell: 5, area: '5 / 1 / 6 / 2', imgSrc: Goods, text: '', activeClass: 'hover-bg-gradient-green', type: 'Truck' },
        { cell: 6, area: '6 / 1 / 7 / 2', imgSrc: Star, text: '',activeClass: 'hover-bg-gradient-purple', type: 'Star' },
        { cell: 7, area: '6 / 2 / 7 / 3', imgSrc: Material,text: '',activeClass: 'hover-bg-gradient-green', type: 'Pickaxe' },
        { cell: 8, area: '6 / 3 / 7 / 4', imgSrc: Vip,text: '30 min', activeClass: 'hover-bg-gradient-green', type: 'VIP' },
        { cell: 9, area: '6 / 4 / 7 / 5', imgSrc: Cash, text: '',activeClass: 'hover-bg-gradient-green', type: 'Cash' },
        { cell: 10, area: '6 / 5 / 7 / 6', imgSrc: Random,text: '', activeClass: 'hover-bg-gradient-box', type: 'Box' },
        { cell: 11, area: '6 / 6 / 7 / 7', imgSrc: Gem, text: '',activeClass: 'hover-bg-gradient-purple', type: 'Start' },
        { cell: 12, area: '5 / 6 / 6 / 7', imgSrc: Resource,text: '',  activeClass: 'hover-bg-gradient-green', type: 'Gold' },
        { cell: 13, area: '4 / 6 / 5 / 7', imgSrc: DiceImg,text: '', activeClass: 'hover-bg-gradient-purple', type: 'Dice' },
        { cell: 14, area: '3 / 6 / 4 / 7', imgSrc: Cash, text: '', activeClass: 'hover-bg-gradient-green', type: 'Cash' },
        { cell: 15, area: '2 / 6 / 3 / 7', imgSrc: Goods,text: '',  activeClass: 'hover-bg-gradient-green', type: 'Truck' },
        { cell: 16, area: '1 / 6 / 2 / 7', imgSrc: Star,text: '', activeClass: 'hover-bg-gradient-purple', type: 'Star' },
        { cell: 17, area: '1 / 5 / 2 / 6', imgSrc: Material,text: '',  activeClass: 'hover-bg-gradient-green', type: 'Pickaxe' },
        { cell: 18, area: '1 / 4 / 2 / 5', imgSrc: Vip, text: '60 min',  activeClass: 'hover-bg-gradient-green', type: 'VIP' },
        { cell: 19, area: '1 / 3 / 2 / 4', imgSrc: Cash,text: '', activeClass: 'hover-bg-gradient-green', type: 'Cash' },
        { cell: 20, area: '1 / 2 / 2 / 3', imgSrc: Random, text: '', activeClass: 'hover-bg-gradient-box', type: 'Box' },
    ];
    const colorMap = {
        'hover-bg-gradient-green': {
            bg: 'bg-[#82E024]',
            shadow: 'shadow-[0_24px_21px_#82E024]',
            bottomBg: 'bg-[#FFD600]',
            bottomShadow: 'shadow-[0_-7px_10px_#FFD600]',
        },
        'hover-bg-gradient-purple': {
            bg: 'bg-[#9955FF]',
            shadow: 'shadow-[0_24px_21px_#9955FF]',
            bottomBg: 'bg-[#9955FF]',
            bottomShadow: 'shadow-[0_-23px_10px_#9955FF]',
        },
        'hover-bg-gradient-box': {
            bg: 'bg-[#000000]',
            border: 'border-2 border-green-500',
            bottomBg: '',     
            bottomShadow: '',
        }
    };
    return <div className='max-w-[346px] w-full h-[346px] '>
        <div className="grid grid-cols-6 grid-rows-6 gap-1 w-full h-full relative">
            {cells.map((cell, i) => (
            <div key={i}  className={`max-w-[3.5rem] w-full aspect-square flex items-center justify-center rounded-lg duration-200 ease-in overflow-hidden relative group ${cell.activeClass} ${cell.activeClass === 'hover-bg-gradient-box' ? position === cell.cell? 'border-2 border-[#82E024] bg-black': 'bg-[#FFFFFF1A] hover:border-2 hover:border-[#82E024] hover:bg-black': 'bg-[#FFFFFF1A]'}`} style={{ gridArea: cell.area }}>
                {cell.activeClass !== 'hover-bg-gradient-box' && (
                    <div className={`absolute -top-9 w-[58px] h-[34.32px] rounded-4xl z-10 ${colorMap[cell.activeClass]?.bg || ''} ${colorMap[cell.activeClass]?.shadow || ''} ${position === cell.cell ? 'block' : 'hidden group-hover:block'}`}></div>
                )}
                {cell.activeClass !== 'hover-bg-gradient-box' && (
                    <div className={`absolute inset-0 z-0 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/img/Field/light.png')] opacity-40 ${position === cell.cell ? 'block' : 'hidden group-hover:block'}`}></div>
                )}
                <div className='flex items-center justify-center flex-col z-20'>
                    <img  src={position === cell.cell && cell.activeImgSrc ? cell.activeImgSrc : cell.imgSrc} />
                    <span className='text-[7px] sm:text-xs  font-bold text-white'>{cell.text}</span>
                </div>
                {cell.activeClass !== 'hover-bg-gradient-box' && (
                    <div className={`absolute -bottom-10 w-14 h-10 rounded-4xl z-10 ${colorMap[cell.activeClass]?.bottomBg || ''} ${colorMap[cell.activeClass]?.bottomShadow || ''} ${position === cell.cell ? 'block' : 'hidden group-hover:block'}`}></div>
                )}
            </div>
            ))}
            <Dice currentValue={currentValue}/>
        </div>
    </div>
}