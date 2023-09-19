import './App.css'
import Footer from './components/Footer'
import HiddenNavbar from './components/HiddenNavbar'
import Nav from './components/Nav'
import {Hero,AboutMe,Contact,Projects} from './sections'


function App() {

  return (
    <main className='relative w-full'>
      <HiddenNavbar />
      <section>
      <Nav />
      </section>
      <section className='py-12 lg:py-36 px-12 bg-pWhite'>
        <Hero />
      </section>
      <section className='py-12 lg:py-32 px-12 bg-white'>
          <AboutMe />
      </section>
      <section className='py-12 lg:py-24 lg:px-60 px-12 bg-pWhite'>
        <Projects />
      </section>
      <section className='py-24 px-12 bg-White'>
        <Contact />
      </section>
      <section>
          <Footer />
      </section>
    </main>
  )
}

export default App
