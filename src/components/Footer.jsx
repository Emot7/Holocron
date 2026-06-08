function Footer() {
    return (
        <footer className="bg-[#000000] border-t border-[#434243] px-12 py-8 flex items-center justify-between">
        {/*Left: Logo*/}
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2E4F8B]"></div>
                <span className="text-[#E8E4D4] font-medium tracking-widest text-sm uppercase font-['Orbitron']">
            Holocron
            </span>
        </div>

        <p className="font-['Golos_Text'] text-[#A3A3A3] text-xs tracking-widest uppercase">
            Every game you've played. Stored in your Holocron.
        </p>

        </footer>
    )
}

export default Footer