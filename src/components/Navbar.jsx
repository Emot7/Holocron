function Navbar() {
  return (
    <nav className="w-full bg-[#000000] border-b border-[#000000] px-8 py-4 flex items-center justify-between">

      {/* LEFT GROUP — logo and links together */}
      <div className="flex items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#C8A96E]"></div>
          <span className="text-[#E8E4D4] font-medium tracking-widest text-sm uppercase font-['Orbitron']">
            Holocron
          </span>
        </div>

        {/* Nav links */}
        <a href="#" className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Explore
        </a>
        <a href="#" className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Library
        </a>

      </div>

      {/* RIGHT GROUP — sign up and log in */}
      <div className="flex items-center gap-6">
        <button className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Sign Up
        </button>
        <button className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Log In
        </button>
      </div>

    </nav>
  )
}

export default Navbar