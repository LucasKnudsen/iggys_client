import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import MainBox1 from '../components/MainBox1'

const Home = () => {
  return (
    <div className="main-container home">
      <Hero />
      <Navbar />
      <MainBox1 />
    </div>
  )
}

export default Home

// Hero, Nav, Content sample