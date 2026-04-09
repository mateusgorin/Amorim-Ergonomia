import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formata a mensagem para o WhatsApp
    const text = `Olá! Vim pelo site e gostaria de falar com um consultor.\n\n*Nome:* ${formData.name}\n*Empresa:* ${formData.company}\n*Telefone:* ${formData.phone}`;
    const encodedText = encodeURIComponent(text);
    
    // Abre o WhatsApp
    window.open(`https://wa.me/5561996883389?text=${encodedText}`, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up">

        {/* Painel esquerdo — gradiente brand */}
        <div className="flex flex-col md:flex-row">

          {/* Coluna decorativa */}
          <div className="hidden md:flex flex-col justify-between bg-brand p-8 w-2/5 text-white">
            <div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold leading-snug mb-3">Fale com a Vanessa agora</h3>
              <p className="text-white/80 text-sm leading-relaxed">Consultoria especializada em NR-17. Resposta em até 1 hora em dias úteis.</p>
            </div>
            <div className="space-y-3 mt-8">
              {["Laudo NR-17 reconhecido em auditorias", "Atendimento personalizado", "Orçamento gratuito e sem compromisso"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white/90 text-xs leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna do formulário */}
          <div className="flex-1 bg-white p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-1">Orçamento gratuito</p>
                <h4 className="text-xl font-bold text-gray-900">Solicite sua proposta</h4>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Seu nome</label>
                <input
                  type="text" name="name" required
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/30 focus:border-brand outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
                  value={formData.name} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Nome da empresa</label>
                <input
                  type="text" name="company" required
                  placeholder="Ex: Empresa Ltda."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/30 focus:border-brand outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
                  value={formData.company} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">WhatsApp (DDD + número)</label>
                <input
                  type="tel" name="phone" required
                  placeholder="(61) 9 9999-9999"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/30 focus:border-brand outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
                  value={formData.phone} onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm mt-2 shadow-lg shadow-brand/30 hover:shadow-brand/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.571a.75.75 0 00.921.912l5.857-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.624-.483-5.162-1.334l-.362-.21-3.762.938.972-3.652-.23-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">Seus dados são usados apenas para contato, conforme a LGPD.</p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactModal;