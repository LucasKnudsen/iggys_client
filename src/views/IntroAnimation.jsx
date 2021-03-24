import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const mainDivVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.25,
      when: 'beforeChildren'
    }
  },
  exit: {
    y: '-100%',
    transition: {
      duration: 1.3,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

const backgroundVariants = {
  exit: {
    y: '-100%',
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 1, 0],
    y: [30, 0, 0, -30],
    transition: {
      duration: 4.7,
    }
  }
}

const whiteWooshVariants = {
  initial: {
    y: '100vh',
  },
  animate: {
    y: '-100vh',
    transition: {
      delay: 3.8,
      duration: 2
    }
  }
}

const mainDivStyle = {
  zIndex: 3,
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  backgroundColor: '#8c7665',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const IntroAnimation = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 6000);
  }, [])

  return (
    <AnimatePresence>
      { visible && (
        <motion.div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backgroundColor: '#f4f4f4', zIndex: 2 }}
          variants={backgroundVariants}
          exit="exit"
        >
          <motion.div style={mainDivStyle}
            variants={mainDivVariants}
            initial='initial'
            animate='animate'
            exit="exit"
          >
            <motion.h1 style={{ fontSize: 50, textTransform: 'uppercase' }}
              variants={textVariants}
            >
              A world of Iggys
             </motion.h1>
            <motion.h1 style={{ fontSize: 50, textTransform: 'uppercase' }}
              variants={textVariants}
            >
              is a world of joy
            </motion.h1>
            <motion.div style={{ position: 'fixed', top: 0, left: 0, height: '70vh', width: '100vw', backgroundColor: '#cdb891', zIndex: 4 }}
              variants={whiteWooshVariants}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation
