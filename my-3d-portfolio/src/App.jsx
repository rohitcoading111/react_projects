import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'

function App() {
  return (
    <main className="min-h-screen w-full bg-[#03040b] text-white">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

    </main>
  )
}

export default App