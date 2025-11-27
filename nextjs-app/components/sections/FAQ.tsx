'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Jak wcześnie należy zarezerwować termin?',
    answer:
      'Zalecamy rezerwację z minimum 6-12 miesięcznym wyprzedzeniem, szczególnie w sezonie ślubnym (maj-wrzesień). Popularne terminy są szybko zajmowane, dlatego im wcześniej się skontaktujecie, tym większa szansa na rezerwację wymarzonego terminu.',
  },
  {
    question: 'Co wchodzi w skład pakietu fotograficznego?',
    answer:
      'Nasz pakiet podstawowy obejmuje: całodzienną obsługę fotografa, sesję narzeczeńską, reportaż z przygotowań, ceremonię ślubną, wesele, sesję plenerową oraz edycję i retusz wszystkich zdjęć. Wszystkie zdjęcia dostarczamy w wysokiej rozdzielczości na pendrive lub w formie online.',
  },
  {
    question: 'Czy oferujecie również filmowanie?',
    answer:
      'Tak! Oferujemy zarówno fotografię, jak i filmowanie. Możecie wybrać pakiet łączony (foto + video) lub zamówić każdą usługę osobno. Posiadamy profesjonalny sprzęt, w tym drona do ujęć z powietrza, który dodaje wyjątkowego charakteru Waszemu filmowi.',
  },
  {
    question: 'Jak długo trwa obróbka zdjęć?',
    answer:
      'Obróbka zdjęć trwa zwykle 4-6 tygodni od dnia ślubu. Wszystkie zdjęcia są starannie wyselekcjonowane i poddane profesjonalnej edycji. W przypadku filmu, czas realizacji wynosi około 8-12 tygodni, w zależności od złożoności projektu.',
  },
  {
    question: 'Czy dojeżdżacie do innych miast?',
    answer:
      'Tak, uwielbiamy podróżować! Dojeżdżamy zarówno w Polsce, jak i za granicę. Koszty dojazdu są ustalane indywidualnie w zależności od odległości. Nie straszne nam wyjazdy, także zagraniczne - każda para to dla nas wyjątkowa historia do opowiedzenia.',
  },
  {
    question: 'Jak wygląda proces współpracy?',
    answer:
      'Proces zaczynamy od spotkania (osobiście lub online), podczas którego poznajemy Wasze oczekiwania, styl i wizję. Następnie przygotowujemy szczegółowy plan dnia, omawiamy lokalizacje i szczegóły. W dniu ślubu jesteśmy z Wami od początku do końca, a po uroczystości zajmujemy się obróbką i dostarczeniem gotowych materiałów.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Najczęściej zadawane pytania{' '}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❓
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pink-200 transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left group"
                whileHover={{ backgroundColor: 'rgba(233, 30, 99, 0.05)' }}
              >
                <h3 className="text-xl font-semibold text-gray-800 pr-4 group-hover:text-pink-600 transition-colors">
                  {faq.question}
                </h3>
                <motion.span
                  className="text-3xl text-pink-600 font-light flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

