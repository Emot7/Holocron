import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";

function Explore() {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const genres = [
    { label: "Action", value: "action" },
    { label: "RPG", value: "role-playing-games-rpg" },
    { label: "Horror", value: "horror" },
    { label: "Adventure", value: "adventure" },
    { label: "Indie", value: "indie" },
    { label: "Shooter", value: "shooter" },
    { label: "Survival", value: "survival" },
  ];

  const years = [
    { label: "2026", value: "2026-01-01,2026-12-31" },
    { label: "2025", value: "2025-01-01,2025-12-31" },
    { label: "2024", value: "2024-01-01,2024-12-31" },
    { label: "2023", value: "2023-01-01,2023-12-31" },
    { label: "2022", value: "2022-01-01,2022-12-31" },
    { label: "2021", value: "2021-01-01,2021-12-31" },
    { label: "2020", value: "2020-01-01,2020-12-31" },
  ];

  const rating = [
    { label: "4+ Stars", value: "80,100" },
    { label: "3+ Stars", value: "60,100" },
    { label: "2+ Stars", value: "40,100" },
  ];

  useEffect(() => {
    const fetchGames = async () => {
      const apiKey = import.meta.env.VITE_RAWG_API_KEY;
      const dateParam = selectedYear
        ? `&dates=${selectedYear}`
        : selectedGenre
          ? ""
          : "&dates=2020-01-01,2026-12-31";
      const genreParam = selectedGenre ? `&genres=${selectedGenre}` : "";
      const ratingParam = selectedRating ? `&metacritic=${selectedRating}` : "";
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&ordering=-added&page_size=21&min_ratings=50${dateParam}${genreParam}${ratingParam}`,
      );
      const data = await res.json();
      setGames(data.results);
    };
    fetchGames();
  }, [selectedGenre, selectedYear, selectedRating]);

  return (
    <div className="bg-[#000000] min-h-screen px-12 py-10">
      {/* Filter Bar */}
      <div className="flex items-center gap-6 mb-10">
        <span className="font-['Orbitron'] text-[#ffffff] text-sm tracking-widest uppercase">
          Browse By
        </span>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "genre" ? null : "genre")
              }
              style={{
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #777777 35%, #797979 61%, #FFFFFF 100%)",
              }}
              className="font-['Gugi'] text-xs text-[#ffffff] px-4 py-2 flex items-center gap-2"
            >
              {selectedGenre
                ? genres
                    .find((g) => g.value === selectedGenre)
                    ?.label.toUpperCase()
                : "GENRE"}{" "}
              ▾
            </button>
            {openDropdown === "genre" && (
              <div className="absolute top-full left-0 mt-1 bg-[#1C1828] border border-[#434243] rounded-md z-50 min-w-[140px]">
                <button
                  onClick={() => {
                    setSelectedGenre("");
                    setOpenDropdown(null);
                  }}
                  className="block w-full text-left px-4 py-2 text-xs font-['Gugi'] text-[#8C8A96] hover:text-[#E8E4D4] hover:bg-[#2A2538]"
                >
                  ALL
                </button>
                {genres.map((genre) => (
                  <button
                    key={genre.value}
                    onClick={() => {
                      setSelectedGenre(genre.value);
                      setOpenDropdown(null);
                    }}
                    className="block w-full text-left px-4 py-2 text-xs font-['Gugi'] text-[#8C8A96] hover:text-[#E8E4D4] hover:bg-[#ffffff]"
                  >
                    {genre.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "year" ? null : "year")
              }
              style={{
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #777777 35%, #797979 61%, #FFFFFF 100%)",
              }}
              className="font-['Gugi'] text-xs text-[#ffffff] px-4 py-2 flex items-center gap-2"
            >
              {selectedYear
                ? years.find((y) => y.value === selectedYear)?.label
                : "YEAR"}{" "}
              ▾
            </button>
            {openDropdown === "year" && (
              <div className="absolute top-full left-0 mt-1 bg-[#1C1828] border border-[#434243] rounded-md z-50 min-w-[140px]">
                <button
                  onClick={() => {
                    setSelectedYear("");
                    setOpenDropdown(null);
                  }}
                  className="block w-full text-left px-4 py-2 text-xs font-['Gugi'] text-[#8C8A96] hover:text-[#E8E4D4] hover:bg-[#2A2538]"
                >
                  ALL
                </button>
                {years.map((year) => (
                  <button
                    key={year.value}
                    onClick={() => {
                      setSelectedYear(year.value);
                      setOpenDropdown(null);
                    }}
                    className="block w-full text-left px-4 py-2 text-xs font-['Gugi'] text-[#8C8A96] hover:text-[#E8E4D4] hover:bg-[#2A2538]"
                  >
                    {year.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "rating" ? null : "rating")
              }
              style={{
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #777777 35%, #797979 61%, #FFFFFF 100%)",
              }}
              className="font-['Gugi'] text-xs text-[#ffffff] px-4 py-2 flex items-center gap-2"
            >
              {selectedRating
                ? rating.find((y) => y.value === selectedRating)?.label
                : "RATING"}{" "}
              ▾
            </button>
            {openDropdown === "rating" && (
              <div className="absolute top-full left-0 mt-1 bg-[#1C1828] border border-[#434243] rounded-md z-50 min-w-[140px]">
                <button
                  onClick={() => {
                    setSelectedRating("");
                    setOpenDropdown(null);
                  }}
                  className="block w-full text-left px-4 py-2 text-xs font-['Gugi'] text-[#8C8A96] hover:text-[#E8E4D4] hover:bg-[#2A2538]"
                >
                  ALL
                </button>
                {rating.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => {
                      setSelectedRating(r.value);
                      setOpenDropdown(null);
                    }}
                    className="block w-full text-left px-4 py-2 text-xs font-['Gugi'] text-[#8C8A96] hover:text-[#E8E4D4] hover:bg-[#2A2538]"
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {["POPULAR"].map((filter) => (
            <button
              key={filter}
              style={{
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #777777 35%, #797979 61%, #FFFFFF 100%)",
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
  );
}

export default Explore;
