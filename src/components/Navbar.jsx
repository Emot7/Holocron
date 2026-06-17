import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="w-full bg-[#000000] border-b border-[#434243] px-8 py-4 flex items-center justify-between">
      {/* Left Group: logo and links together */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2E4F8B]"></div>
          <span className="text-[#ffffff] font-medium tracking-widest text-sm uppercase font-['Orbitron']">
            Holocron
          </span>
        </div>

        {/* Nav links */}
          
        <Link to ="/explore" className="text-[#ffffff] hover:text-[#E8E4D4] text-sm transition-colors">
          Explore
        </Link>
        <Link to="/library" className="text-[#ffffff] hover:text-[#E8E4D4] text-sm transition-colors">
          Library
        </Link>
      </div>

      {/* Right Group: sign up and log in */}
      <div className="flex items-center gap-6">
        {/* Center: search bar */}
        <div className="relative flex items-center">
            <div className="absolute inset-0 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm" />
          <input
            type="text"
            placeholder="Search Games..."
            className="relative z-10 bg-transparent text-[#ffffff] placeholder-[#ffffff] text-sm px-5 py-2 pr-10 w-[280px] focus:outline-none"
          />
          <FiSearch className="absolute right-4 text-[#ffffff]" />
        </div>
        <Link to="/signup" className="text-[#ffffff] hover:text-[#E8E4D4] text-sm transition-colors">
          Sign Up
        </Link>
        <button className="text-[#ffffff] hover:text-[#E8E4D4] text-sm transition-colors">
          Log In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
