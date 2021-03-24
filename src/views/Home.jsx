import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import MainBox1 from '../components/MainBox1'
import { motion } from 'framer-motion'

const containerVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    }
  }
}

const Home = () => {
  return (
    <motion.div className="main-container home"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Hero />
      <Navbar />
      <MainBox1 />
    </motion.div>
  )
}

export default Home

// Hero, Nav, Content sample