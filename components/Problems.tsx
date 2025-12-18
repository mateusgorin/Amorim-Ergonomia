import React from 'react';
import { AlertTriangle, Clock, TrendingDown, Activity, FileText } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <FileText className="w-8 h-8 text-brand" />,
      text: "Precisa se adequar à NR-17 porque o PGR exigiu documentação ergonômica - e o prazo está apertado ?"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-brand" />,
      text: "Está passando por fiscalização do Ministério do Trabalho e precisa regularizar tudo rapidamente ?"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-brand" />,
      text: "Já solicitou orçamentos, mas os valores não cabem no orçamento da sua empresa?"
    },
    {
      icon: <Activity className="w-8 h-8 text-brand" />,
      text: "Seus colaboradores relatam dores nas costas, ombros ou braços, afetando produtividade e bem-estar?"
    }
  ];

  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Sua empresa está enfrentando algum desses problemas ?
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm">
                {item.icon}
              </div>
              <p className="text-gray-700 font-sans text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand/5 p-8 rounded-2xl max-w-4xl mx-auto text-center border border-brand/20">
          <p className="text-xl text-gray-800 font-medium">
            Na Amorim Ergonomia, entendemos cada um desses desafios - e entregamos soluções rápidas, acessíveis e totalmente alinhadas às necessidades da sua empresa. Eficiência, economia e conformidade sem complicação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;