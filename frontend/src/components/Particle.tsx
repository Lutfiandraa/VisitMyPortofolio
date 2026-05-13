'use client';

import React, { useRef, useEffect } from "react"

interface ParticlesProps {
  id: string
}

declare global {
  interface Window {
    particlesJS: any
  }
}

const Particle = ({ id }: ParticlesProps) => {
  const particlesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Initialize particles.js with brighter configuration
    const initParticles = () => {
      if (!particlesRef.current || !window.particlesJS) return

      // Reduce particles on mobile for better performance
      const isMobile = window.innerWidth < 768
      const particleCount = isMobile ? 60 : 90

      window.particlesJS(particlesRef.current.id, {
        particles: {
          number: {
            value: particleCount,
            density: {
              enable: true,
              value_area: isMobile ? 600 : 900,
            },
          },
          color: {
            value: "#C0C0C0", // Silver metallic
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1.0, // Brighter - increased from 0.85
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.5, // Increased minimum opacity
              sync: false,
            },
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 130,
            color: "#C0C0C0",
            opacity: 0.6, // Brighter - increased from 0.45
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      })
    }

    // Wait for particles.js to load with timeout
    let checkParticles: NodeJS.Timeout | null = null
    let timeoutId: NodeJS.Timeout | null = null
    
    checkParticles = setInterval(() => {
      if (window.particlesJS) {
        if (checkParticles) clearInterval(checkParticles)
        if (timeoutId) clearTimeout(timeoutId)
        initParticles()
      }
    }, 100)

    // Timeout after 10 seconds
    timeoutId = setTimeout(() => {
      if (checkParticles) clearInterval(checkParticles)
    }, 10000)

    // Cleanup
    return () => {
      if (checkParticles) clearInterval(checkParticles)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      id={id}
      ref={particlesRef}
      className="particles-container absolute inset-0 -z-10"
    />
  )
}

export default Particle
