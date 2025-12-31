import React from 'react';
import { Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8 border-t-4 border-brand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-sans">AMORIM ERGONOMIA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consultoria especializada que transforma ambientes de trabalho através da ergonomia, saúde e segurança, garantindo conformidade com a NR-17.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/amorimergonomia?igsh=YnZ4ancwMDR6b3B3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-brand transition-colors text-white">
                  <Instagram size={20} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">@amorimergonomia</span>
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-brand">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Phone size={20} className="text-brand mt-1" />
                <a href="https://wa.me/5561996883389" className="hover:text-white transition-colors">
                  +55 (61) 9 9688-3389
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail size={20} className="text-brand mt-1" />
                <a href="mailto:amoriim.ergonomia@gmail.com" className="hover:text-white transition-colors break-all">
                  amoriim.ergonomia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="text-brand mt-1" />
                <span>Brasília - DF</span>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-brand">Horário de Atendimento</h4>
            <div className="flex items-start gap-3 text-gray-300">
              <Clock size={20} className="text-brand mt-1" />
              <div>
                <p className="font-medium text-white">Segunda a Sábado</p>
                <p className="text-sm">de 9:00 às 17:00</p>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="space-y-6">
             <h4 className="text-lg font-semibold text-brand">Solicite Orçamento</h4>
             <p className="text-gray-400 text-sm">
               Responda rapidamente às demandas do seu PGR e evite multas.
             </p>
             <a 
               href="https://wa.me/5561996883389" 
               className="block text-center bg-brand hover:bg-brand-light text-white font-bold py-3 rounded-lg transition-colors"
             >
               Solicitar via WhatsApp
             </a>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AMORIM ERGONOMIA. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desenvolvido por <a href="https://www.gorinsoluções.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand transition-colors font-medium">Gorin Soluções</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;