import Header from './components/Header';
import Hero from './components/Hero';
import Cargo from './components/Cargo';
import Cold from './components/Cold';
import { Docs, Dirs, Steps, Faq } from './components/sections';
import { Ask, Footer } from './components/tail';
import { useLenis } from './components/useLenis';
import { useReveal } from './components/useReveal';

export default function App() {
  useLenis();
  useReveal('cargo');
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cargo />
        <Cold />
        <Docs />
        <Dirs />
        <Steps />
        <Faq />
        <Ask />
      </main>
      <Footer />
    </>
  );
}
