import gradientOrb from '../assets/Gradient.png'
import Vector from '../assets/Vector.svg'

function Hero() {
  return (
    <section className="bg-[#000000] px-12 py-1 flex items-center justify-between">

      {/* Left side */}
      <div className="max-w-lg mt-[-80px]">
        <h1 className="font-['Golos_Text'] text-5xl font-bold text-[#E8E4D4] leading-tight mb-4">
          Every Game You've Played. Stored In Your{" "}
          <span className="bg-gradient-to-r from-[#647EC5] via-[#FFFFFF] to-[#2F63F2] bg-clip-text text-transparent">
            Holocron.
          </span>
        </h1>

        <p className="font-['Golos_Text'] text-[#8C8A96] text-base mb-8">
          Track your backlog, discover what's popular, and share what you think — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="relative hover:opacity-80 transition-opacity">
            <img src={Vector} alt="" className="w-[160px]" />
            <span className="absolute inset-0 flex items-center justify-center font-['Gugi'] text-sm text-[#ffffff]">
              GET STARTED
            </span>
          </button>
          <button className="relative hover:opacity-80 transition-opacity">
            <img src={Vector} alt="" className="w-[160px]" />
            <span className="absolute inset-0 flex items-center justify-center font-['Gugi'] text-sm text-[#ffffff]">
              EXPLORE GAMES
            </span>
          </button>
        </div>
      </div>

      {/* Right side: orb */}
      <div className="flex-1 flex justify-center items-center mt-[-20px]">
        <img src={gradientOrb} alt="Holocron orb" className="w-[750px] opacity-90" />
      </div>

    </section>
  )
}

export default Hero