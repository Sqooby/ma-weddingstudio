'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-artistic opacity-40"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(233, 30, 99, 0.4) 0%, rgba(118, 75, 162, 0.4) 100%)',
            'linear-gradient(135deg, rgba(118, 75, 162, 0.4) 0%, rgba(233, 30, 99, 0.4) 100%)',
            'linear-gradient(135deg, rgba(233, 30, 99, 0.4) 0%, rgba(118, 75, 162, 0.4) 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: '100%',
          }}
          animate={{
            y: '-100vh',
            x: [0, 50, -50, 0],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl w-full parallax-content"
        style={{
          transform: !isMobile 
            ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            : 'none',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl px-4"
        >
          <span className="gradient-text-animated block mb-2">Uchwycamy</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block"
          >
            piękno chwil!
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-light tracking-wider sm:tracking-widest uppercase mb-6 sm:mb-8 drop-shadow-lg px-4"
        >
          Fotografia ślubna i film || Rzeszów
        </motion.h2>

        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-3xl sm:text-4xl text-pink-400"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ❤️
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

