import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const questions: FAQItem[] = [
  {
    question: "A Amorim emite laudo ergonômico válido?",
    answer: "Sim, todos os nossos documentos seguem os critérios exigidos pela NR-17 e são assinados por profissional habilitado."
  },
  {
    question: "Atendem empresas de pequeno porte?",
    answer: "Sim, temos soluções sob medida para empresas de todos os tamanhos, inclusive com pacotes acessíveis para pequenos negócios."
  },
  {
    question: "Em quanto tempo posso receber o laudo?",
    answer: "Nosso prazo médio de entrega depende da complexidade da demanda. Para casos mais simples, conseguimos entregar a partir de 5 dias úteis."
  },
  {
    question: "É possível tirar dúvidas pelo WhatsApp?",
    answer: "Nosso atendimento pelo WhatsApp é direto e rápido. Basta clicar no botão de orçamento."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Tire suas dúvidas sobre nossos serviços</span>
          <h2 className="text-3xl font-semibold text-gray-900 mt-2">Dúvidas comuns sobre serviços de Ergonomia</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span className="font-semibold text-gray-800 text-lg pr-4">{item.question}</span>
                {openIndex === index ? <ChevronUp className="text-brand" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;