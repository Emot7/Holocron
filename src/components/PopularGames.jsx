import { useState, useEffect } from "react";
import GameCard from "./GameCard";

function PopularGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gameNames = [
      "Resident Evil Requiem",
      "Crimson Desert",
      "Nioh 3",
      "Death Stranding 2",
      "Pragmata",
    ];

    const fetchGames = async () => {
      const apiKey = import.meta.env.VITE_RAWG_API_KEY;

      const results = await Promise.all(
        gameNames.map(async (name) => {
          const res = await fetch(
            `https://api.rawg.io/api/games?key=${apiKey}&search=${name}&page_size=1`,
          )
          const data = await res.json();
          return data.results[0];
        }),
      )

      setGames(results.filter(Boolean))
    }

    fetchGames();
  }, [])

  return (
    <section className="bg-[#000000] px-12 pt-0 pb-16">
      <h2 className="text-[#E8E4D4] font-['Orbitron'] text-lg font-medium tracking-widest uppercase mb-8">
        Popular Games
      </h2>
      <div className="flex gap-6 items-start">
        {games.map((game) => (
          <div key={game.id} className="flex-1 min-w-0">
          <GameCard key={game.id} game={game} imageHeight="h-[260px]" />
          </div>
        ))}
      </div>
    </section>
  )
}
export default PopularGames;
