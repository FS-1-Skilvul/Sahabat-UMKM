
import Navbar from './components/navbar'
import './App.css'

import Hero from './sections/hero'

function App() {
 

  return (
    <>
    <Navbar/>
    <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
    </>
  )
}

export default App
