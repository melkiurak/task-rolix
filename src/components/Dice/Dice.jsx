import dice1 from '@img/Dice/Value=1.png';
import dice2 from '@img/Dice/Value=2.png';
import dice3 from '@img/Dice/Value=3.png';
import dice4 from '@img/Dice/Value=4.png';
import dice5 from '@img/Dice/Value=5.png';
import dice6 from '@img/Dice/Value=6.png';


export const Dice = ({currentValue}) => {
    return  <div className="cube">
      <div className="cube-container">
        <div className='cube-container__face'>
            <div className='cube-container__pip'>
                <span className='w-3.5 h-3.5 rounded-4xl bg-[#181A20] inline-block'></span>
            </div>
        </div>
        <div className='cube-container__face'>
            <div className='cube-container__pip'>
                <span className='w-3.5 h-3.5 rounded-4xl bg-[#181A20] inline-block'></span>
            </div>
        </div>
        <div className='cube-container__face'>
            <div className='cube-container__pip'>
                <span className='w-3.5 h-3.5 rounded-4xl bg-[#181A20] inline-block'></span>
            </div>
        </div>
        <div className='cube-container__face'>
            <div className='cube-container__pip'>
                <span className='w-3.5 h-3.5 rounded-4xl bg-[#181A20] inline-block'></span>
            </div>
        </div>
        <div className='cube-container__face'>
            <div className='cube-container__pip'>
                <span className='w-3.5 h-3.5 rounded-4xl bg-[#181A20] inline-block'></span>
            </div>
        </div>
        <div className='cube-container__face'>
            <div className='cube-container__pip'>
                <span className='w-3.5 h-3.5 rounded-4xl bg-[#181A20] inline-block'></span>
            </div>
        </div>
      </div>
    </div>
}