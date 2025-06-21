export const Shots = ({maxShots, totalShots}) => {
    return <div className="container">
        <div className="flex items-center justify-between">
            <h5 className="text-sm text-[#FFFFFF]">Available rolls</h5>
            <h2>{maxShots} / {totalShots}</h2>
        </div>
        <div className="flex items-center gap-0.5">
            {Array.from({length: totalShots}).map((_,index) => (
                <div className={`w-[33.7px] h-5  ${index === 0 ? "rounded-l-2xl" : 'rounded-[2px]'} ${index === totalShots - 1 ? 'rounded-r-2xl' : "rounded-[2px]"} ${index < maxShots ? 'bg-[linear-gradient(45deg,hsl(50_100%_50%)_0%,hsl(38_100%_50%)_100%)]' : 'bg-[#FFFFFF33]'}`} key={index}></div>
            ))}
        </div>
    </div>
}