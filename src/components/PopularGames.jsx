import { useState, useEffect } from "react";

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
      <div className="flex gap-6">
        {games.map((game) => (
          <div key={game.id} className="flex-1">
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-[260px] object-cover object-top rounded-md"
            />
            <p className="text-[#E8E4D4] text-sm mt-2">{game.name}</p>
            <p className="text-[#8C8A96] text-sm mt-2">{game.rating}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default PopularGames;
