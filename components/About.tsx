import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "Menos afastamento por LER/DORT e redução de custos trabalhistas.",
    "Mais bem-estar e motivação entre os colaboradores.",
    "Produtividade elevada com ambientes de trabalho mais saudáveis.",
    "Conformidade total com a NR-17, evitando multas e riscos legais."
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative flex justify-center">
             <div className="relative w-fit">
                <div className="absolute inset-0 bg-gray-200 transform -rotate-3 rounded-3xl"></div>
                <img 
                  src="https://i.ibb.co/Hp21608R/Whats-App-Image-2025-12-18-at-08-59-09.jpg" 
                  alt="Equipe Amorim Ergonomia" 
                  className="relative rounded-3xl shadow-2xl w-auto h-auto max-h-[500px] lg:max-h-[600px] object-contain transform rotate-0 hover:rotate-1 transition-all duration-500 border-4 border-white"
                />
             </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h4 className="text-brand font-bold tracking-widest uppercase mb-2">Quem somos</h4>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Amorim Ergonomia</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-6">Especialistas em Ergonomia em Brasília focados em resultado e economia</h3>
            
            <div className="space-y-6 text-gray-600 font-sans leading-relaxed">
              <p>
                A Amorim Ergonomia nasceu para ajudar empresas a reduzirem custos, cuidarem melhor dos colaboradores e alcançarem resultados consistentes por meio de soluções ergonômicas acessíveis e realmente eficazes. Nossos serviços são conduzidos pela Consultora em Ergonomia Vanessa Fonseca Amorim, garantindo expertise técnica, responsabilidade e entrega de alto padrão.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand">
                <p className="font-semibold text-gray-900 mb-4">Com nossas soluções, sua empresa conquista:</p>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <p className="font-bold text-gray-900 mb-2">
                  Fale conosco agora mesmo e descubra como podemos transformar o ambiente de trabalho da sua empresa:
                </p>
                <a href="https://wa.me/5561996883389" className="text-2xl font-bold text-brand hover:underline">
                  (61) 99688-3389
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;