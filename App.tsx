import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-brand selection:text-white">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Problems />
        <Services onOpenModal={openModal} />
        <About />
        <Benefits onOpenModal={openModal} />
        <BlogSection />
        <FAQ />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;