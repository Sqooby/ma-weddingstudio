'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  day: string;
  month: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Jak przygotować się do sesji ślubnej?',
    excerpt:
      'Przygotowania do sesji ślubnej to kluczowy element, który wpływa na końcowy efekt. W tym artykule dzielimy się naszymi najlepszymi wskazówkami, jak przygotować się do sesji, aby uzyskać piękne i naturalne zdjęcia. Od wyboru odpowiedniego stroju po wybór lokalizacji - wszystko ma znaczenie.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    day: '15',
    month: 'LIS',
    slug: 'jak-przygotowac-sie-do-sesji-slubnej',
  },
  {
    title: 'Najpiękniejsze miejsca na sesje ślubne w Rzeszowie',
    excerpt:
      'Rzeszów i okolice oferują wiele malowniczych miejsc idealnych na sesje ślubne. Od zabytkowych parków po nowoczesne lokalizacje - przedstawiamy nasze ulubione miejsca, które tworzą magiczne tło dla Waszych zdjęć. Każde miejsce ma swój unikalny charakter.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    day: '08',
    month: 'LIS',
    slug: 'najpiekniejsze-miejsca-rzeszow',
  },
  {
    title: 'Film ślubny - co warto wiedzieć?',
    excerpt:
      'Film ślubny to niezwykła pamiątka, która pozwala Wam wrócić do tego wyjątkowego dnia. Opowiadamy o procesie tworzenia filmu, od planowania po montaż, oraz o tym, jak współpracować z filmowcem, aby uzyskać wymarzony efekt. Poznaj tajniki profesjonalnego filmowania.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    day: '01',
    month: 'LIS',
    slug: 'film-slubny-co-warto-wiedziec',
  },
  {
    title: 'Trendy w fotografii ślubnej 2024',
    excerpt:
      'Świat fotografii ślubnej ciągle się zmienia. W tym artykule przedstawiamy najnowsze trendy, które dominują w tym sezonie. Od naturalnych, reportażowych ujęć po kreatywne sesje plenerowe - odkryj, co jest teraz na topie.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    day: '25',
    month: 'PAŹ',
    slug: 'trendy-fotografia-slubna-2024',
  },
  {
    title: 'Jak wybrać fotografa ślubnego?',
    excerpt:
      'Wybór fotografa ślubnego to jedna z najważniejszych decyzji podczas planowania ślubu. Podpowiadamy, na co zwrócić uwagę, jakie pytania zadać i jak ocenić portfolio. Znajdź fotografa, który najlepiej odda Waszą historię.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    day: '18',
    month: 'PAŹ',
    slug: 'jak-wybrac-fotografa-slubnego',
  },
  {
    title: 'Sesja narzeczeńska - dlaczego warto?',
    excerpt:
      'Sesja narzeczeńska to doskonała okazja, aby poznać swojego fotografa przed ślubem i poczuć się swobodnie przed obiektywem. Opowiadamy o korzyściach z takiej sesji i podpowiadamy, jak się do niej przygotować.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    day: '10',
    month: 'PAŹ',
    slug: 'sesja-narzeczenska-dlaczego-warto',
  },
];

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Blog <span className="gradient-text-animated">📝</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-4">
            Dzielimy się z Wami naszą wiedzą, doświadczeniem i inspiracjami
            związanymi z fotografią i filmowaniem ślubów.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, index, inView }: { post: BlogPost; index: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer group hover-lift card-shadow"
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <motion.div
          className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 sm:p-4 rounded-lg sm:rounded-xl text-center shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <span className="block text-2xl sm:text-3xl font-bold">{post.day}</span>
          <span className="block text-xs uppercase tracking-wider">{post.month}</span>
        </motion.div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        <motion.a
          href={`/blog/${post.slug}`}
          className="text-pink-600 font-semibold inline-flex items-center gap-2 text-sm sm:text-base group-hover:gap-4 transition-all"
          whileHover={{ x: 5 }}
        >
          Czytaj więcej →
        </motion.a>
      </div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.article>
  );
}

