import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formata a mensagem para o WhatsApp
    const text = `Olá, gostaria de falar com um consultor.\n\n*Nome:* ${formData.name}\n*Empresa:* ${formData.company}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}`;
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
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Janela do Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <div className="bg-brand p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="text-xl font-bold mb-2 font-sans">Fale com consultor agora</h3>
          <p className="text-sm opacity-90 font-sans leading-relaxed">
            Preencha os dados abaixo para falar agora no whatsapp com um consultor tire todas as dúvidas e receba uma proposta gratuita
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-sans">Informe seu nome</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-sans"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-sans">E-mail para receber cópia do orçamento</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-sans"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-sans">DDD + Número</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-sans"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-sans">Nome da sua empresa</label>
            <input 
              type="text" 
              name="company" 
              required 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-sans"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide text-sm mt-2 font-sans"
          >
            Enviar / Continuar <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;