import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

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
        {/* Row 1: Photo and Main Info */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-xl">
              <img 
                src="https://i.ibb.co/Hp21608R/Whats-App-Image-2025-12-18-at-08-59-09.jpg" 
                alt="Equipe Amorim Ergonomia" 
                loading="lazy"
                width="600"
                height="500"
                className="rounded-3xl shadow-2xl w-full h-auto border-4 border-white"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-brand font-bold tracking-widest uppercase mb-2">Quem somos</h4>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Amorim Ergonomia</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-6">Especialistas em Ergonomia em Brasília focados em resultado e economia</h3>
            
            <div className="space-y-6 text-gray-600 font-sans leading-relaxed">
              <p>
                A Amorim Ergonomia nasceu para ajudar empresas a reduzirem custos, cuidarem melhor dos colaboradores e alcançarem resultados consistentes por meio de soluções ergonômicas acessíveis e realmente eficazes. Nossos serviços são conduzidos pela Consultora em Ergonomia Vanessa Fonseca Amorim, garantindo expertise técnica, responsabilidade e entrega de alto padrão.
              </p>
              
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Formação & Credenciais</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Técnico em Segurança do Trabalho</strong> formado pelo SENAI (2012), com registro ativo na DRT sob nº 8315.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Especialista em Ergonomia</strong>, com formação em Consultoria de Ergonomia pela referência nacional Débora Dengo (pós-graduação reconhecida pelo MEC).
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "Certificada em NR-17",
                      "Elaboração de AET e AEP",
                      "Atuação em Brasília-DF"
                    ].map((cred) => (
                      <span key={cred} className="inline-flex items-center gap-1 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full border border-brand/20">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Benefits and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
          <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-brand shadow-sm h-full">
            <p className="font-semibold text-gray-900 text-lg mb-6">Com nossas soluções, sua empresa conquista:</p>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-full lg:pl-8">
            <div className="bg-brand/5 p-8 rounded-2xl border border-brand/20 bg-white shadow-sm relative overflow-hidden group h-full flex flex-col justify-center">
              <div className="absolute -right-8 -bottom-8 text-brand/5 group-hover:text-brand/10 transition-colors duration-500">
                <MessageCircle size={180} />
              </div>
              
              <p className="text-xl font-bold text-gray-900 mb-6 leading-relaxed relative z-10">
                Fale conosco agora mesmo e descubra como podemos transformar o ambiente de trabalho da sua empresa:
              </p>
              
              <div className="relative z-10 space-y-4">
                <a 
                  href="https://wa.me/5561996883389" 
                  className="flex items-center gap-4 group/btn"
                >
                  <div className="bg-brand text-white p-3 rounded-xl shadow-lg group-hover/btn:scale-110 transition-transform duration-300">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-bold text-brand hover:text-brand-dark transition-colors">
                      (61) 99688-3389
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 font-medium mt-1">
                      <span>Atendimento rápido via WhatsApp</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "+50", label: "Empresas atendidas" },
            { number: "+200", label: "Postos avaliados" },
            { number: "5 dias", label: "Prazo médio de entrega" },
            { number: "100%", label: "Laudos aprovados em auditoria" }
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-3xl font-bold text-brand mb-1">{item.number}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;