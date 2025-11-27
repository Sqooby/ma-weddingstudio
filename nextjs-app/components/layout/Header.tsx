'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#oferta', label: 'Oferta' },
    { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link href="/" className="block">
              <Image
                src="/cropped-logo-ma-1.png"
                alt="M&A Wedding Logo"
                width={isScrolled ? 60 : 70}
                height={isScrolled ? 60 : 70}
                className="drop-shadow-lg transition-all duration-300"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-800 font-semibold uppercase text-sm tracking-wider transition-colors hover:text-pink-600 group"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-pink-600 transition-colors text-2xl font-bold"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 flex items-center justify-center"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4 bg-white/95 backdrop-blur-md">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-800 font-semibold uppercase text-sm py-2 hover:text-pink-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

