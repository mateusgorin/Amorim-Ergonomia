import React from 'react';
import { Building2, MonitorSmartphone, HeartPulse, Truck, ShoppingBag, Home } from 'lucide-react';

const Segments: React.FC = () => {
  const segments = [
    { icon: <Building2 className="w-6 h-6" />, label: "Escritórios & Coworkings" },
    { icon: <MonitorSmartphone className="w-6 h-6" />, label: "Tecnologia & TI" },
    { icon: <HeartPulse className="w-6 h-6" />, label: "Saúde & Clínicas" },
    { icon: <Truck className="w-6 h-6" />, label: "Logística & Transporte" },
    { icon: <ShoppingBag className="w-6 h-6" />, label: "Varejo & Comércio" },
    { icon: <Home className="w-6 h-6" />, label: "Home Office & Híbrido" }
  ];

  return (
    <section className="pt-8 pb-4 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Segmentos que atendemos</h2>
          <p className="text-gray-500 text-sm">Soluções ergonômicas adaptadas à realidade de cada setor</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {segments.map((seg) => (
            <div key={seg.label} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-brand/5 hover:border-brand/20 border border-transparent transition-all duration-200 text-center">
              <div className="text-brand">{seg.icon}</div>
              <p className="text-xs font-semibold text-gray-700 leading-tight">{seg.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
