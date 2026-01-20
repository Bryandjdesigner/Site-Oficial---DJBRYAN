import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Vamos Fazer <br/> <span className="text-neon-purple">História?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Disponível para clubes, festivais e eventos privados em todo o mundo. Entre em contato para verificar disponibilidade e rider técnico.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Mail className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Booking & Press</h4>
                  <a href="mailto:booking@djbryan.com" className="text-gray-400 hover:text-white transition-colors">booking@djbryan.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">WhatsApp</h4>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">+55 (11) 99999-9999</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPin className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Base</h4>
                  <p className="text-gray-400">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
             <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
             
             <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome</label>
                 <input type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="Seu nome" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                 <input type="email" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="seu@email.com" />
               </div>
             </div>

             <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Tipo de Evento</label>
                 <select className="w-full bg-black/50 border border-white/10 rounded p-3 text-gray-400 focus:border-neon-purple focus:outline-none transition-colors">
                   <option>Festival</option>
                   <option>Club</option>
                   <option>Corporativo</option>
                   <option>Privado</option>
                 </select>
             </div>

             <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Mensagem</label>
               <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="Detalhes do evento, data, local..."></textarea>
             </div>

             <button type="submit" className="w-full py-4 bg-neon-purple hover:bg-neon-purple/80 text-white font-bold uppercase tracking-widest rounded transition-all">
               Enviar Solicitação
             </button>
          </form>

        </div>
      </div>
    </Section>
  );
};

export default Contact;