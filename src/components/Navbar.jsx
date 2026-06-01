function Navbar() {
  return (
    <nav className="w-full bg-[#0D0B14] border-b border-[#1C1828] px-8 py-4 flex items-center justify-between">

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#C8A96E]"></div>
        <span className="text-[#E8E4D4] font-medium tracking-widest text-sm uppercase">
          Holocron
        </span>
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Explore
        </a>
        <a href="#" className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Library
        </a>
        <a href="#" className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Community
        </a>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-[#8C8A96] hover:text-[#E8E4D4] text-sm transition-colors">
          Log in
        </button>
        <button className="bg-[#C8A96E] text-[#0D0B14] text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
          Sign up
        </button>
      </div>

    </nav>
  )
}

export default Navbar