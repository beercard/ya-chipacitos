
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Locations from '@/components/Locations';
import News from '@/components/News';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Locations />
      <News />
      <Careers />
      <Footer />
      <StickyCTA />
    </main>
  );
}
