import dice1 from '@img/Dice/Value=1.png';
import dice2 from '@img/Dice/Value=2.png';
import dice3 from '@img/Dice/Value=3.png';
import dice4 from '@img/Dice/Value=4.png';
import dice5 from '@img/Dice/Value=5.png';
import dice6 from '@img/Dice/Value=6.png';


export const Dice = ({currentValue}) => {
    const diceImg = [
        {id: 1, img: dice1, alt: 'Dice with number one'},
        {id: 2, img: dice2, alt: 'Dice with number two'},
        {id: 3, img: dice3, alt: 'Dice with number three'},
        {id: 4, img: dice4, alt: 'Dice with number four'},
        {id: 5, img: dice5, alt: 'Dice with number five'},
        {id: 6, img: dice6, alt: 'Dice with number six'},
    ]
    return <div>
        <img src={diceImg[currentValue - 1].img} alt={diceImg[currentValue - 1].alt} />
    </div>
}