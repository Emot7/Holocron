import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularGames from './components/PopularGames'

function App() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Navbar />
      <Hero />
      <PopularGames />
    </div>
  )
}

export default App