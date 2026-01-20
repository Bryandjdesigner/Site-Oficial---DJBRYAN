import React from 'react';
import Section from './Section';
import { UPCOMING_EVENTS } from '../constants';
import { MapPin, Calendar, Ticket } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <Section id="schedule" className="bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Próximos <span className="text-neon-pink">Eventos</span>
          </h2>
          <div className="w-24 h-1 bg-neon-pink mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => (
            <div key={event.id} className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-neon-pink/50 transition-all duration-300 flex flex-col">
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative bg-black">
                {event.id === 3 ? (
                  // Custom Animation for "Em Aberto" (ID 3)
                  <>
                    <div className="absolute inset-0 bg-slate-900"></div>
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(rgba(4, 217, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4, 217, 255, 0.3) 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }}></div>
                    {/* Scanline Effect */}
                    <div className="scanline-container"></div>
                    {/* Pulsing Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-neon-blue font-display font-bold text-2xl animate-pulse tracking-widest">
                            EM BREVE
                        </span>
                    </div>
                  </>
                ) : (
                  // Standard Image for other events
                  <>
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Date Badge only for real events */}
                    {event.date && (
                      <div className="absolute top-4 left-4 z-20 bg-neon-pink text-black font-bold px-3 py-1 text-sm rounded">
                        {event.date}
                      </div>
                    )}
                  </>
                )}

                {/* Numbering */}
                <div className="absolute top-2 right-4 z-20">
                  <span className="text-5xl font-display font-black text-white/20 group-hover:text-neon-pink/80 transition-colors duration-300 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-pink transition-colors">
                  {event.title}
                </h3>
                
                {event.location && (
                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-neon-pink" />
                    <span>{event.location}</span>
                  </div>
                )}
                
                {event.time && (
                  <div className="flex items-center text-gray-400 mb-6">
                    <Calendar className="w-4 h-4 mr-2 text-neon-pink" />
                    <span>{event.time}</span>
                  </div>
                )}

                <div className="mt-auto">
                    {event.ticketLink ? (
                    <a
                        href={event.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-3 bg-white/10 hover:bg-neon-pink hover:text-black text-white font-bold uppercase text-sm tracking-wider rounded transition-all"
                    >
                        <Ticket className="w-4 h-4 mr-2" />
                        Ingressos
                    </a>
                    ) : (
                    <div className="w-full py-3 bg-white/5 text-gray-500 font-bold uppercase text-sm tracking-wider rounded text-center cursor-default">
                        {event.date === 'Em Breve' ? 'Aguarde' : 'Ingressos Esgotados / Privado'}
                    </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Events;