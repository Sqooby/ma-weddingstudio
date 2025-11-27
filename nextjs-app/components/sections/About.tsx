'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const team = [
  {
    name: 'Ola',
    role: 'Fotograf',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description:
      'Jesteśmy parą w życiu i w biznesie, którą połączyła wspólna pasja do fotografii i filmowania. Latamy dronem, pracujemy tylko na profesjonalnym sprzęcie. Na co dzień mieszkamy w Rzeszowie, ale uwielbiamy podróżować, więc nie straszne nam wyjazdy, także zagraniczne. Kreatywność oraz umiejętność uchwycenia niezapomnianych chwil to jedne z wielu cech, które charakteryzują naszą twórczość. W swojej pracy skupiamy się na wydobyciu emocji oraz poszukiwaniu tego, co najpiękniejsze. Wiemy, jak ważny jest dla Was TEN DZIEŃ, dlatego dbamy o każdy detal, aby stworzyć razem z Wami Waszą, wyjątkową historię w oparciu o Wasze zainteresowania, oczekiwania, i to, jacy jesteście. Służymy pełną dozą pomysłów, ale jesteśmy też otwarci na wszelkie propozycje, abyśmy razem stworzyli coś wyjątkowego. 😉',
  },
  {
    name: 'Michał',
    role: 'Filmowiec',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description:
      'Jesteśmy parą w życiu i w biznesie, którą połączyła wspólna pasja do fotografii i filmowania. Latamy dronem, pracujemy tylko na profesjonalnym sprzęcie. Na co dzień mieszkamy w Rzeszowie, ale uwielbiamy podróżować, więc nie straszne nam wyjazdy, także zagraniczne. Kreatywność oraz umiejętność uchwycenia niezapomnianych chwil to jedne z wielu cech, które charakteryzują naszą twórczość. W swojej pracy skupiamy się na wydobyciu emocji oraz poszukiwaniu tego, co najpiękniejsze. Wiemy, jak ważny jest dla Was TEN DZIEŃ, dlatego dbamy o każdy detal, aby stworzyć razem z Wami Waszą, wyjątkową historię w oparciu o Wasze zainteresowania, oczekiwania, i to, jacy jesteście. Służymy pełną dozą pomysłów, ale jesteśmy też otwarci na wszelkie propozycje, abyśmy razem stworzyli coś wyjątkowego. 😉',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            O nas{' '}
            <motion.span
              className="inline-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🙋🏻
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
            >
              🙋🏻‍♂️
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((person, index) => (
            <PersonCard key={person.name} person={person} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonCard({
  person,
  index,
  inView,
}: {
  person: typeof team[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-100/50 to-purple-100/50 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <div className="relative w-48 h-48 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-pink-500"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(233, 30, 99, 0.3)',
                  '0 0 40px rgba(233, 30, 99, 0.5)',
                  '0 0 20px rgba(233, 30, 99, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Image
              src={person.image}
              alt={`${person.name} - ${person.role}`}
              fill
              className="rounded-full object-cover"
              sizes="192px"
            />
          </div>
        </motion.div>

        <h4 className="text-2xl font-bold text-pink-600 mb-4">
          {person.name} - {person.role}
        </h4>
        <p className="text-gray-700 leading-relaxed">{person.description}</p>
      </div>
    </motion.div>
  );
}

