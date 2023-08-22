
//Components
import About from './components/About'
import Accommodation from './components/Accommodation'
import Activity from './components/Activity'
import Contact from './components/Contact'
import Culture from './components/Culture'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tour from './components/Tour'

export default function Home() {
  return (
    <main>
      <Navbar />



      <Hero />

      <About />
      
      <Tour />
      
      <Culture />

      <Activity />
{/*

      <Accommodation />

      <Contact /> */}

      <Footer />
    </main>
  )
}
