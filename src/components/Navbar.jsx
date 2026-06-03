import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="w-full bg-[#000000] border-b border-[#434243] px-8 py-4 flex items-center justify-between">
      {/* Left Group: logo and links together */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2E4F8B]"></div>
          <span className="text-[#E8E4D4] font-medium tracking-widest text-sm uppercase font-['Orbitron']">
            Holocron
          </span>
        </div>

        {/* Nav links */}
        <a
          href="#"
          className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors"
        >
          Explore
        </a>
        <a
          href="#"
          className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors"
        >
          Library
        </a>
      </div>

      {/* Right Group: sign up and log in */}
      <div className="flex items-center gap-6">
        {/* Center: search bar */}
        <div className="relative flex items-center">
            <div className="absolute inset-0 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm" />
          <input
            type="text"
            placeholder="Search Games..."
            className="relative z-10 bg-transparent text-[#E8E4D4] placeholder-[#919094] text-sm px-5 py-2 pr-10 w-[280px] focus:outline-none"
          />
          <FiSearch className="absolute right-4 text-[#919094]" />
        </div>
        <button className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Sign Up
        </button>
        <button className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Log In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
