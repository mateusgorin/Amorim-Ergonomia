import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const questions: FAQItem[] = [
  {
    question: "A Amorim Ergonomia emite laudo ergonômico válido para auditorias?",
    answer: "Sim. Todos os nossos documentos — AEP e AET — seguem rigorosamente os critérios da NR-17 atualizada e são assinados por profissional habilitado. São aceitos em fiscalizações do Ministério do Trabalho, eSocial e pelo SESMT."
  },
  {
    question: "Atendem empresas de pequeno porte e MEIs?",
    answer: "Sim. Temos soluções sob medida para empresas de todos os tamanhos, com pacotes acessíveis para pequenos negócios e MEIs. O tamanho da empresa não é uma barreira — entre em contato para entender a melhor opção para você."
  },
  {
    question: "Em quanto tempo recebo o laudo ergonômico?",
    answer: "O prazo depende da complexidade da demanda e do número de postos de trabalho avaliados. Para casos mais simples, conseguimos entregar a partir de 5 dias úteis. Casos urgentes (fiscalização em andamento) têm atendimento prioritário — nos avise na primeira mensagem."
  },
  {
    question: "Qual a diferença entre AEP e AET?",
    answer: "A AEP (Avaliação Ergonômica Preliminar) é a etapa inicial obrigatória pela NR-17 atualizada: identifica os riscos ergonômicos no ambiente de trabalho. A AET (Análise Ergonômica do Trabalho) é o documento completo e aprofundado, exigido em situações de maior risco ou em processos de autuação. Podemos te orientar sobre qual você precisa."
  },
  {
    question: "Quanto custa uma consultoria ergonômica?",
    answer: "Os valores variam conforme o porte da empresa, o número de postos de trabalho e a complexidade do serviço. Oferecemos orçamentos gratuitos e personalizados — entre em contato pelo WhatsApp para receber uma proposta sem compromisso e sem letras miúdas."
  },
  {
    question: "Atendem fora de Brasília?",
    answer: "Nosso foco principal é o Distrito Federal e o Entorno (cidades do DF, Goiânia e região). Para outras localidades, consulte disponibilidade — em alguns casos atendemos de forma híbrida ou presencial mediante agendamento."
  },
  {
    question: "O laudo é aceito pelo eSocial e pelo SESMT?",
    answer: "Sim. Todos os nossos documentos são elaborados em conformidade com a NR-17 vigente e compatíveis com as exigências do eSocial e do SESMT. Entregamos a documentação necessária para que sua empresa esteja protegida em qualquer auditoria."
  },
  {
    question: "É possível tirar dúvidas antes de contratar?",
    answer: "Com certeza. Nosso atendimento pelo WhatsApp é direto, rápido e sem compromisso. A Vanessa responde pessoalmente — sem robôs, sem central de atendimento. Clique no botão de orçamento e tire todas as suas dúvidas gratuitamente."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-12 pb-10 bg-gray-50">
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