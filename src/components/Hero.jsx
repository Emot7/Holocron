import gradientOrb from "../assets/Gradient.png";
import Vector from "../assets/Vector.svg";

function Hero() {
  return (
    <section className="relative bg-[#000000] px-12 flex items-center justify-between h-[550px]">
      {/* left side */}
      <div className="max-w-lg mt-[-80px]">
        <h1 className="font-['Golos_Text'] text-5xl font-bold text-[#E8E4D4] leading-tight mb-4">
          Every Game You've Played. Stored In Your{" "}
          <span className="bg-gradient-to-r from-[#647EC5] via-[#FFFFFF] to-[#2F63F2] bg-clip-text text-transparent">
            Holocron.
          </span>
        </h1>

        <p className="font-['Golos_Text'] text-[#A3A3A3] text-base mb-8">
          Track your backlog, discover what's popular, and share what you think
          — all in one place.
        </p>

        {/* buttons */}
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

      {/* orb */}
      <div className="absolute right-[120px] top-[-70px] w-[750px]">
        <img
          src={gradientOrb}
          alt="Holocron orb"
          className="w-full opacity-90"
        />
      </div>
    </section>
  );
}

export default Hero;
