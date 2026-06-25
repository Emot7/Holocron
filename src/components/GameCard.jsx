function GameCard ({ game, imageHeight = 'aspect-[3/4]' }) {
    return (
        <div className="flex flex-col gap-2">
            <div className={`w-full ${imageHeight} rounded-lg overflow-hidden bg-[#1C1828]`}>
                <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-full object-cover"
                />
            </div>

            <div>
                <p className="font-['Orbitron'] text-[#E8E4D4] text-xs font-medium uppercase tracking-wide truncate">
                    {game.name}
                </p>
                <p className="font-['Golos_Text'] text-[#8C8A96] text-xs mt-1">
                    {game.released?.slice(0,4)} · {game.genres?.[0]?.name}
                </p>
            </div>
            {/* Ratings */}
            <div className="flex gap-1">
                {[1,2,3,4,5].map((diamond) => (
                    <div
                    key={diamond}
                    style={{
                        width: '10px',
                        height: '10px',
                        background: diamond <= Math.round(game.rating) ? '#4A7FD4' : '#1C1828',
                        transform: 'rotate(45deg)',
                        boxShadow: diamond <= Math.round(game.rating) ? '0 0 6px #4A7FD4' : 'none',

                    }}
                />
                ))}
            </div>
        </div>
    )
}
export default GameCard