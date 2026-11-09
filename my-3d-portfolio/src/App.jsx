import Navbar from './components/Navbar'
import Hero from './sections/Hero'

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