import './App.css'
import Nav from './components/Nav'
import {Hero,AboutMe,Contact,Projects} from './sections'


function App() {

  return (
    <main className='relative bg-pWhite'>
      <Nav />
      <section className='py-24 px-12'>
        <Hero />
      </section>
      <section className='py-24 px-12'>
          <AboutMe />
      </section>
      <section className='py-24 px-12'>
        <Projects />
      </section>
      <section className='py-24 px-12'>
        <Contact />
      </section>
    </main>
  )
}

export default App
