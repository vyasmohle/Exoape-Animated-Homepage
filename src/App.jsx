import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Playreel from './components/Playreel'
import Pictures from './components/Pictures'
import Spread from './components/Spread'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full ' >
      <Navbar/>
      <Landing/>
      <Work/>
      <Playreel/>
      <Pictures/>
      <Spread/>
      <Footer/>
    </div>
  )
}

export default App