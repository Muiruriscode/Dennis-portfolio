import About from '../components/About'
import Service from '../components/Service'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Project from '../components/project'
import Navbar from '../components/Navbar'
import { FaChevronCircleUp } from 'react-icons/fa'

import homeImg from '../img/main.png'

const Home = () => {
  return (
    <main id='home' className='mainSection'>
      <Navbar />
      <div className='homeSection padding'>
        <div className='homeDivContent'>
          <h1 className='welcome homeText'>Welcome</h1>
          <h1 className='homeText name'>Hi, I’m Dennis Muiruri</h1>
          <h2 className='homeText'>Web Developer.</h2>
          <h3 className='homeText'>based in Kenya.</h3>
          <a href='#home' className='rctIcons chevUp'>
            <FaChevronCircleUp />
          </a>
        </div>
        <div className='homeDiv'>
          <img src={homeImg} alt='home' className='homeImg'></img>
        </div>
      </div>
      <About />
      <Service />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
