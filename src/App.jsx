import { useState } from 'react'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'






function App() {

  return (
    <div className="App">
      <NavBar/>
      <hr/>
      <Hero/>
      <hr/>
      <Testimonial />
      <hr/>
      <Contact/>
      <hr/>
      <Footer />
    </div>
  )
}

export default App
