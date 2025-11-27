'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Package {
  title: string;
  badge: string;
  badgeType: 'default' | 'premium';
  features: string[];
  featured?: boolean;
}

const packages: Package[] = [
  {
    title: 'Pakiet Standard',
    badge: 'Popularny',
    badgeType: 'default',
    features: [
      'Całodzienna obsługa fotografa (do 10h)',
      'Sesja narzeczeńska',
      'Reportaż z przygotowań',
      'Ceremonia ślubna',
      'Wesele',
      'Sesja plenerowa',
      '300+ edytowanych zdjęć',
      'Wszystkie zdjęcia w wysokiej rozdzielczości',
      'Pendrive z materiałami',
    ],
  },
  {
    title: 'Pakiet Premium',
    badge: 'Rekomendowany',
    badgeType: 'premium',
    featured: true,
    features: [
      'Całodzienna obsługa fotografa (do 12h)',
      'Drugi fotograf',
      'Sesja narzeczeńska',
      'Reportaż z przygotowań',
      'Ceremonia ślubna',
      'Wesele',
      'Sesja plenerowa',
      '500+ edytowanych zdjęć',
      'Album fotograficzny (30 stron)',
      'Photo box z wybranymi zdjęciami',
      'Wszystkie zdjęcia w wysokiej rozdzielczości',
      'Pendrive z materiałami',
    ],
  },
  {
    title: 'Pakiet Foto + Video',
    badge: 'Kompletny',
    badgeType: 'default',
    features: [
      'Wszystko z Pakietu Premium',
      'Filmowiec przez cały dzień',
      'Film ślubny (5-7 min)',
      'Film pełnometrażowy (30-45 min)',
      'Ujęcia z drona',
      'Trailer ślubny (1-2 min)',
      'Montaż i kolor korekcja',
      'Pendrive z filmami w 4K',
    ],
  },
];

export default function Packages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="oferta" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="gradient-text-animated">Oferta</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Services Intro */}
        <div ref={ref} className="space-y-8 sm:space-y-12 mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center px-4"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-4 sm:mb-6">
              Fotografujemy 📷
            </h3>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
              Fotografia jest sztuką uwiecznienia emocji, a piękno chwil tkwi w
              szczegółach. Naszym celem jest uchwycenie każdego najmniejszego
              elementu, aby stworzyć dla Was niezwykłą pamiątkę na lata.
              Wykonujemy fotografie zarówno grupowe, portretowe, ale także dbamy o
              detale. Zawsze staramy się być krok przed Wami, aby żaden moment nie
              został pominięty. Jednocześnie staramy się być „niewidzialni",
              zapewniając Wam pełną swobodę i komfort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center px-4"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-4 sm:mb-6">
              Filmujemy 🎥
            </h3>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
              W filmie tak samo jak w fotografii stawiamy na emocje. Nasza praca
              nie polega jedynie na rejestrowaniu materiału, ale także na
              zapewnieniu Wam komfortu z naszej strony, abyście czuli się
              swobodnie przed obiektywem i nie bali się okazywać sobie uczuć.
              Zazwyczaj nagrywamy z ziemi, ale posiadamy też drona, który pozwala
              ubarwić Wasz film o ciekawe ujęcia z powietrza.
            </p>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center space-y-4 sm:space-y-6 px-4"
        >
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <strong className="text-pink-600">M&A Wedding</strong> to profesjonalny duet oferujący szeroko
            pojęte usługi z zakresu fotografii i filmowania ślubów i wesel. Latamy dronem, pracujemy tylko na
            profesjonalnym sprzęcie oraz uwielbiamy podróżować, dlatego nie straszne nam wyjazdy, także
            zagraniczne. Kreatywność oraz umiejętność uchwycenia niezapomnianych chwil to jedne z wielu cech,
            które charakteryzują naszą twórczość.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Połączenie fotografii oraz filmu w jednej firmie jest niezwykłą zaletą, ponieważ umiemy ze sobą
            pracować, zapewniając Wam pełen profesjonalizm we wszystkim, co robimy. Każda para to inna,
            niesamowita historia do opowiedzenia.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-4"
          >
            Nasze Pakiety
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.title} package={pkg} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageCard({ package: pkg, index, inView }: { package: Package; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover-lift card-shadow group ${
        pkg.featured ? 'lg:scale-105 border-2 border-pink-500 glow-effect' : 'border-2 border-transparent hover:border-pink-200'
      }`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-200">
        <h4 className="text-xl sm:text-2xl font-bold text-gray-800">{pkg.title}</h4>
        <motion.div
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold text-white whitespace-nowrap ${
            pkg.badgeType === 'premium'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600'
              : 'bg-gradient-to-r from-pink-600 to-pink-500'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {pkg.badge}
        </motion.div>
      </div>

      {/* Features */}
      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {pkg.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2 + i * 0.05 }}
            className="flex items-start text-gray-700 text-sm sm:text-base"
          >
            <motion.span
              className="text-pink-600 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0 mt-0.5"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
            >
              ✓
            </motion.span>
            <span className="leading-relaxed">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full uppercase tracking-wider shadow-lg text-sm sm:text-base"
        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 30, 99, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        Zapytaj o dostępność
      </motion.button>

      {/* Decorative gradient line */}
      {pkg.featured && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-t-3xl"
          animate={{
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}

