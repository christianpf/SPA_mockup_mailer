import { useState } from 'react'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import './App.css'






function App() {

  return (
    <div className="App">
      <NavBar/>
      <hr/>
      <Hero/>
      <hr/>
      <Testimonial />

      <Contact/>
    </div>
  )
}

export default App
