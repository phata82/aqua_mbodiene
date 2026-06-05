import Hero from '@/components/Hero';
import Attractions from '@/components/Attractions';
import Premium from '@/components/Premium';
import EcoTech from '@/components/EcoTech';
import Accommodation from '@/components/Accommodation';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import Dining from '@/components/Dining';
import WeatherWidget from '@/components/WeatherWidget';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <ScrollReveal animation="fade-up">
        <Attractions />
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <Premium />
      </ScrollReveal>

      <ScrollReveal animation="slide-left">
        <Dining />
      </ScrollReveal>

      <ScrollReveal animation="slide-right">
        <Accommodation />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Pricing />
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <EcoTech />
      </ScrollReveal>

      <Footer />
      <WeatherWidget />
    </main>
  );
}
