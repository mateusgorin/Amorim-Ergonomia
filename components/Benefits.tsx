import React from 'react';
import { ShieldCheck, UserCheck, MessageCircle, DollarSign } from 'lucide-react';

interface BenefitsProps {
  onOpenModal: () => void;
}

const Benefits: React.FC<BenefitsProps> = ({ onOpenModal }) => {
  const list = [
    { text: "Tranquilidade em auditorias e exigências legais.", icon: <ShieldCheck size={24} /> },
    { text: "Atendimento especializado e humanizado.", icon: <UserCheck size={24} /> },
    { text: "Suporte rápido pelo WhatsApp.", icon: <MessageCircle size={24} /> },
    { text: "O melhor custo-benefício da região.", icon: <DollarSign size={24} /> },
  ];

  return (
    <section className="py-20 bg-brand text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
          Evite multas, reduza riscos e mantenha sua empresa 100% em conformidade
        </h2>
        <p className="text-xl max-w-4xl mx-auto mb-12 text-blue-50">
          A Amorim Ergonomia te entrega relatórios da NR-17 completos e aceitos em auditorias, além de suporte contínuo para que sua empresa esteja sempre segura diante de fiscalizações.
        </p>

        <h3 className="text-2xl font-bold mb-10 inline-block border-b-2 border-white/30 pb-2">Você ganha:</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex flex-col items-center gap-4">
              <div className="bg-white text-brand p-3 rounded-full shadow-lg">
                {item.icon}
              </div>
              <p className="font-medium text-lg leading-tight">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button onClick={onOpenModal} className="bg-white text-brand text-lg font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-block">
            Solicite seu orçamento Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;