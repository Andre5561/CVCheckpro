import Hero from '../components/Hero';
import Features from '../components/Features';
import Steps from '../components/Steps';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Cta from '../components/Cta';

export default function Home() {
  return (
    <>
      {/* Главная секция */}
      <section id="hero">
        <Hero />
      </section>

      {/* Особенности (Features) */}
      <section id="features">
        <Features />
      </section>

      <Cta />

      {/* Этапы (How it works / Steps) */}
      <section id="steps">
        <Steps />
      </section>

      <Pricing />
      <Testimonials />

      {/* Вопросы (FAQ) */}
      <section id="faq">
        <FAQ />
      </section>
    </>
  );
}
