'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#oferta', label: 'Oferta' },
    { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-6"
          >
            <Image
              src="/cropped-logo-ma-1.png"
              alt="M&A Wedding Logo"
              width={50}
              height={50}
              className="mx-auto brightness-0 invert sm:w-[60px] sm:h-[60px]"
            />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-2 px-4"
          >
            M&A Wedding || Fotografia ślubna i film.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 px-4"
          >
            Uchwycamy piękno chwil! Fotografia ślubna i film.
          </motion.p>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm sm:text-base text-white hover:text-pink-400 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-500 text-xs sm:text-sm pt-4 sm:pt-6 border-t border-gray-800 px-4"
          >
            © 2019 Company. All rights reserved. Powered by Phlox Theme
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

