
import Navbar from './components/navbar'
import './App.css'

import Hero from './sections/hero'
import Kategori from './sections/Kategori'

function App() {
 

  return (
    <>
    <Navbar/>
    {/* <section className='xl:padding-l wide:padding-r padding-b'> */}
        <Hero />
      {/* </section> */}
      <Kategori/>
    </>
  )
}

export default App
