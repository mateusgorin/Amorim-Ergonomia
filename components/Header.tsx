import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Check if at the very top
        setIsAtTop(currentScrollY < 10);

        // Always show at the very top
        if (currentScrollY < 10) {
          setIsVisible(true);
        } else {
          // Hide if scrolling down, show if scrolling up
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          }
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -150 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50"
    >
      {/* Top Bar */}
      <AnimatePresence>
        {isAtTop && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 text-white text-sm py-2 px-4 hidden md:block overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex space-x-6">
                <span className="flex items-center gap-2 hover:text-brand-light transition-colors cursor-default">
                  <Phone size={14} className="text-brand hover:text-brand-light transition-colors" /> 
                  Ligue Agora: (61) 9 9688-3389
                </span>
                <span className="flex items-center gap-2 hover:text-brand-light transition-colors cursor-default">
                  <Mail size={14} className="text-brand" /> 
                  amoriim.ergonomia@gmail.com
                </span>
              </div>
              <span className="flex items-center gap-2 font-semibold">
                <MapPin size={14} className="text-brand" />
                Atendemos Brasília
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px] relative">
          {/* Logo - Centered on mobile, left-aligned on desktop */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer absolute left-1/2 -translate-x-1/2 md:static md:left-0 md:translate-x-0" 
            onClick={() => window.scrollTo(0,0)}
          >
            {/* Desktop Logo */}
            <img 
              src="https://i.postimg.cc/hG0x63Pg/Picsart-26-04-08-13-16-58-293.png" 
              alt="Amorim Ergonomia" 
              className="hidden md:block h-[72px] w-auto object-contain mb-0"
            />
            {/* Mobile Logo */}
            <img 
              src="https://i.postimg.cc/MHmKmCdh/Picsart-26-04-08-22-13-00-828.png" 
              alt="Amorim Ergonomia" 
              className="block md:hidden h-[60px] w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center ml-auto" aria-label="Navegação principal">
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
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-brand focus:outline-none"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"} 
              aria-expanded={isOpen}
            >
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
    </motion.header>
  );
};

export default Header;