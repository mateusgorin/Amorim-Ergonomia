import React from 'react';
import { ClipboardCheck, Users, GraduationCap, PlusCircle } from 'lucide-react';

interface ServicesProps {
  onOpenModal: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenModal }) => {
  const services = [
    {
      title: "Consultoria de Ergonomia",
      description: "Adequamos postos de trabalho, documentações e práticas para garantir a conformidade com a NR-17 e reduzir riscos ergonômicos. Elaboramos Laudos Ergonômicos AET e AEP.",
      icon: <ClipboardCheck className="w-12 h-12 text-white" />
    },
    {
      title: "Blitz Postural",
      description: "Ações pontuais de observação, orientação e correção postural no ambiente de trabalho para prevenir lesões e aumentar o bem-estar.",
      icon: <Users className="w-12 h-12 text-white" />
    },
    {
      title: "Treinamentos em Ergonomia",
      description: "Capacitamos equipes e líderes sobre práticas ergonômicas no dia a dia, promovendo mais saúde e produtividade no ambiente corporativo.",
      icon: <GraduationCap className="w-12 h-12 text-white" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/10 transform skew-x-12 translate-x-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-white">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300">Soluções completas em ergonomia para sua empresa em Brasília:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors border border-gray-700 group">
              <div className="bg-brand w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <PlusCircle className="w-16 h-16 text-white/90 hidden sm:block" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Precisa de outro serviço?</h3>
              <p className="text-white/90">Você pode nos falar o que precisa e vamos te ajudar!</p>
            </div>
          </div>
          <button 
            onClick={onOpenModal}
            className="bg-white text-brand px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 whitespace-nowrap shadow-md hover:bg-gray-50"
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;