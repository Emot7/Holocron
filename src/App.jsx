import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularGames from './components/PopularGames'
import FeatureCards from './components/FeatureCards'

function App() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Navbar />
      <Hero />
      <PopularGames />
      <FeatureCards/>
    </div>
  )
}

export default App