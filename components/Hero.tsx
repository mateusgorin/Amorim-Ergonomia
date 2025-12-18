import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-brand/10 rounded-full text-brand font-semibold text-sm tracking-wider mb-2">
              CONSULTORIA ESPECIALIZADA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-gray-900 leading-tight">
              Ergonomia em Brasília com o <span className="text-brand">Melhor Retorno</span> para sua Empresa
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-sans">
              Reduza afastamentos, aumente a produtividade e mantenha sua empresa 100% em conformidade com a NR-17 de forma simples, rápida e sem custos desnecessários.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl font-sans">
              Somos uma consultoria especializada em ergonomia que entrega soluções práticas, eficientes e totalmente adaptadas à realidade de cada negócio. Nosso objetivo é garantira ambientes de trabalho mais saudáveis, colaboradores mais motivados e empresas mais competitivas.
            </p>
            
            <div className="pt-4">
              <button 
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Solicite um Orçamento Personalizado
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white w-fit">
              <div className="absolute inset-0 bg-brand/20 mix-blend-multiply z-10 pointer-events-none"></div>
              <img 
                src="https://i.ibb.co/RWLMPHm/Whats-App-Image-2025-12-18-at-08-59-00.jpg" 
                alt="Profissional de ergonomia avaliando ambiente" 
                className="block w-auto h-auto max-h-[500px] lg:max-h-[600px] object-contain transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge moved inside relative wrapper to stick to image */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">100% Adequado</p>
                    <p className="text-sm text-gray-500">NR-17 e eSocial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;