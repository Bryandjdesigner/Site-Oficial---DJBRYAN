import React, { useState } from 'react';
import Section from './Section';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Festival',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, eventType, message } = formData;
    
    const whatsappMessage = `*Novo Contato via Site*\n\n*Nome:* ${name}\n*Email:* ${email}\n*Tipo de Evento:* ${eventType}\n*Mensagem:* ${message}`;
    const whatsappUrl = `https://wa.me/5521965844958?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">E-mail</h4>
                  <a href="mailto:DJBRYANCLUB@GMAIL.COM" className="text-gray-400 hover:text-white transition-colors">DJBRYANCLUB@GMAIL.COM</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">WhatsApp</h4>
                  <a href="https://wa.me/5521965844958" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">(21) 96584-4958</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPin className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Localização</h4>
                  <p className="text-gray-400">Salvador-BA</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
             <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
             
             <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome</label>
                 <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" 
                    placeholder="Seu nome" 
                    required
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                 <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" 
                    placeholder="seu@email.com" 
                    required
                 />
               </div>
             </div>

             <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Tipo de Evento</label>
                 <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-gray-400 focus:border-neon-purple focus:outline-none transition-colors"
                 >
                   <option value="Festival">Festival</option>
                   <option value="Club">Club</option>
                   <option value="Corporativo">Corporativo</option>
                   <option value="Privado">Privado</option>
                 </select>
             </div>

             <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Mensagem</label>
               <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" 
                  placeholder="Detalhes do evento, data, local..."
                  required
               ></textarea>
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