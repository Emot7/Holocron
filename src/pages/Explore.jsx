import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'

function Explore() {
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      const apiKey = import.meta.env.VITE_RAWG_API_KEY
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating&page_size=21&min_ratings=10`
      )
      const data = await res.json()
      setGames(data.results)
    }
    fetchGames()
  }, [])

  return (
    <div className="bg-[#000000] min-h-screen px-12 py-10">

      {/* Filter Bar */}
      <div className="flex items-center gap-6 mb-10">
        <span className="font-['Orbitron'] text-[#ffffff] text-sm tracking-widest uppercase">
          Browse By
        </span>
        <div className="flex items-center gap-3">
          {['GENRE', 'YEAR', 'RATING', 'POPULAR'].map((filter) => (
            <button
              key={filter}
              style={{
                background: "linear-gradient(to right, #FFFFFF 0%, #777777 35%, #797979 61%, #FFFFFF 100%)",
              }}
              className="font-['Gugi'] text-xs text-[#ffffff] px-4 py-2 flex items-center gap-2"
            >
              {filter} ▾
            </button>
          ))}
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-7 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

    </div>
  )
}

export default Explore