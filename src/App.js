import React from 'react'
import './App.css' ;

import Navbar from './components/Navbar'
import About_me from './components/About_me';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <About_me></About_me>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
