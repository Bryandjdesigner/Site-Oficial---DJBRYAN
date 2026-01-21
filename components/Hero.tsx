import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-20"></div>
        <img
          src="https://images.unsplash.com/photo-1571266028243-371695039989?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 glitch" data-text="DJ BRYAN">
          DJ BRYAN
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10">
          Experiência sonora imersiva. Da House Music ou funk
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="https://open.spotify.com/track/32xPLSqoGN6bng8gLyJdpL?si=OdwpMjJAQy6T40_KUrEnHw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-neon-purple hover:bg-neon-purple/80 text-white font-bold uppercase tracking-widest rounded-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(176,38,255,0.5)]"
          >
            Lançamento
          </a>
          <a
            href="#schedule"
            className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all"
          >
            Ver Agenda
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ArrowDown className="text-white w-8 h-8 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;