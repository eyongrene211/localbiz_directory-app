'use client'
import { motion }    from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef }    from 'react'

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up' // 'up', 'down', 'left', 'right', 'fade', 'scale'
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, // Animation happens only once
    margin: "-100px" // Trigger animation 100px before element enters viewport
  })

  // Animation variants based on direction
  const variants = {
    up: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Smooth easing
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
