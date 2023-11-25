

import Navbar from '../components/navbar'
import Hero from '../sections/hero'
import Kategori from '../sections/Kategori'
import KelasPopuler from '../sections/kelasPopuler'
import Footer from '../sections/Footer'
// import AuthUser from '../components/AuthUser'

function Home() {
  // const {isAuth} = useContext(AuthUser)
  return (
    <div>
       <Navbar />
        <Hero />
        <Kategori />
        <KelasPopuler />
        <Footer /> 
      
    </div>
  )
}

export default Home
