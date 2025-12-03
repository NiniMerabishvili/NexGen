import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Records from './components/sections/Records'
import Reasons from './components/sections/Reasons'
import Services from './components/sections/Services'
import Works from './components/sections/Works'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Records />
        <Reasons />
        <Services />
        <Works />
      </main>
    </div>
  )
}

export default App
