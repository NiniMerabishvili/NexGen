import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Records from './components/sections/Records'
import Reasons from './components/sections/Reasons'
import Services from './components/sections/Services'
import Works from './components/sections/Works'
import Testimonials from './components/sections/Testimonials'
import Faq from './components/sections/Faq'
import SocMedia from './components/sections/SocMedia'
import Footer from './components/sections/Footer'

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
        <Testimonials />
        <Faq />
        <SocMedia />
        <Footer />
      </main>
    </div>
  )
}

export default App
