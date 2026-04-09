import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import Segments from './components/Segments';
import About, { SocialProof } from './components/About';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import BlogPostPage from './components/BlogPost';

const HomePage: React.FC<{ openModal: () => void }> = ({ openModal }) => (
  <main id="main-content">
    <Hero onOpenModal={openModal} />
    <Problems />
    <Services onOpenModal={openModal} />
    <Segments />
    <About />
    <SocialProof />
    <Benefits onOpenModal={openModal} />
    <BlogSection />
    <FAQ />
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-800 bg-white selection:bg-brand selection:text-white">
        <Header onOpenModal={openModal} />
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        <a
          href="https://wa.me/5561996883389?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20ergonomia."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          title="Falar pelo WhatsApp"
          className="fixed bottom-10 right-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.571a.75.75 0 0 0 .921.912l5.857-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.624-.483-5.162-1.334l-.362-.21-3.762.938.972-3.652-.23-.374A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;