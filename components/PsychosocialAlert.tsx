import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

interface PsychosocialAlertProps {
  onOpenModal: () => void;
}

const PsychosocialAlert: React.FC<PsychosocialAlertProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-amber-500 text-gray-900 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 hidden sm:block" />
            <p className="font-semibold text-sm sm:text-base leading-snug">
              <strong>Fiscalização da NR-1 em andamento:</strong> os riscos psicossociais já são exigência obrigatória e separada no PGR. Regularize sua empresa antes de ser notificada.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap hover:bg-gray-800 transition-all"
          >
            Fazer diagnóstico agora
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PsychosocialAlert;
