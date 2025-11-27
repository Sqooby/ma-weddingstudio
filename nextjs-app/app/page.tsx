import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Packages from '@/components/sections/Packages';
import Gallery from '@/components/sections/Gallery';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Packages />
      <Gallery />
      <About />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
