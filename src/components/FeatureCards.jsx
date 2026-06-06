import Square from '../assets/Square.png'
import Vector from '../assets/Vector.svg'

function FeatureCards() {
  return (
    <section className="bg-[#000000] px-12 py-16">
      <div className="flex gap-6">

        {/* Card 1 */}
        <div className="relative flex-1">
          <img src={Square} alt="" className="w-full" />
          <div className="absolute inset-0 p-8 flex flex-col justify-start gap-8">
            <button className="relative hover:opacity-80 transition-opacity w-fit">
              <img src={Vector} alt="" className="w-[200px]" />
              <span className="absolute inset-0 flex items-center justify-center font-['Gugi'] text-xs text-[#ffffff]">
                BUILD YOUR BACKLOG
              </span>
            </button>
            <p className="font-['Golos_Text'] text-[#A3A3A3] text-sm leading-relaxed">
              Log every game you own, finish, or want to play. Your whole history, crystallized in one archive.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex-1">
          <img src={Square} alt="" className="w-full" />
          <div className="absolute inset-0 p-8 flex flex-col justify-start gap-8">
            <button className="relative hover:opacity-80 transition-opacity w-fit">
              <img src={Vector} alt="" className="w-[160px]" />
              <span className="absolute inset-0 flex items-center justify-center font-['Gugi'] text-xs text-[#ffffff]">
                RATE & REVIEW
              </span>
            </button>
            <p className="font-['Golos_Text'] text-[#A3A3A3] text-sm leading-relaxed">
              Score what you finish with diamond ratings and short reviews. Build a profile that reflects your taste.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex-1">
          <img src={Square} alt="" className="w-full" />
          <div className="absolute inset-0 p-8 flex flex-col justify-start gap-8">
            <button className="relative hover:opacity-80 transition-opacity w-fit">
              <img src={Vector} alt="" className="w-[210px]" />
              <span className="absolute inset-0 flex items-center justify-center font-['Gugi'] text-xs text-[#ffffff]">
                DISCOVER WHAT'S NEXT
              </span>
            </button>
            <p className="font-['Golos_Text'] text-[#A3A3A3] text-sm leading-relaxed">
              See what's trending in the archive and surface hidden gems matched to the games you already love.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FeatureCards