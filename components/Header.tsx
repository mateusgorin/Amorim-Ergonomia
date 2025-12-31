import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2 hover:text-brand-light transition-colors cursor-default">
              <Phone size={14} className="text-brand animate-[tada_1.5s_ease-in-out_infinite]" /> 
              Ligue Agora: (61) 9 9688-3389
            </span>
            <span className="flex items-center gap-2 hover:text-brand-light transition-colors cursor-default">
              <Mail size={14} className="text-brand animate-[pulse_2s_ease-in-out_infinite]" /> 
              amoriim.ergonomia@gmail.com
            </span>
          </div>
          <span className="flex items-center gap-2 font-semibold">
            <MapPin size={14} className="text-brand" />
            Atendemos Brasília
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="https://i.ibb.co/pvxZtYpp/Chat-GPT-Image-18-de-dez-de-2025-09-15-29.png" 
              alt="Amorim Ergonomia" 
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Como ajudamos sua Empresa', 'Nossos Serviços', 'Quem Somos', 'Dúvidas Comuns'].map((item, index) => {
               const id = item === 'Como ajudamos sua Empresa' ? 'problems' : 
                          item === 'Nossos Serviços' ? 'services' : 
                          item === 'Quem Somos' ? 'about' : 
                          'faq';
               return (
                <button 
                  key={index}
                  onClick={() => scrollTo(id)}
                  className="text-gray-600 hover:text-brand font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item}
                </button>
               )
            })}
             <button 
                onClick={() => scrollTo('blog')}
                className="text-gray-600 hover:text-brand font-medium transition-colors text-sm uppercase tracking-wide"
              >
                Blog
              </button>
            <button 
              onClick={onOpenModal}
              className="bg-brand text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              Fale conosco
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
             {['Como ajudamos sua Empresa', 'Nossos Serviços', 'Quem Somos', 'Dúvidas Comuns'].map((item, index) => {
               const id = item === 'Como ajudamos sua Empresa' ? 'problems' : 
                          item === 'Nossos Serviços' ? 'services' : 
                          item === 'Quem Somos' ? 'about' : 
                          'faq';
               return (
                <button 
                  key={index}
                  onClick={() => scrollTo(id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 w-full text-center"
                >
                  {item}
                </button>
               )
            })}
            <button 
              onClick={() => scrollTo('blog')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 w-full text-center"
            >
              Blog
            </button>
             <button 
              onClick={() => { setIsOpen(false); onOpenModal(); }}
              className="block w-full text-center px-3 py-3 mt-2 rounded-md text-base font-bold bg-brand text-white"
            >
              Fale conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;