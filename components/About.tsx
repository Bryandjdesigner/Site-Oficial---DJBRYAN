import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
            <img
              src="https://i.imgur.com/fbbLk64.jpeg"
              alt="DJ Bryan Portrait"
              className="relative w-full h-[600px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              A Batida que <span className="text-neon-blue">Move Você</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Com mais de uma década dominando as pistas, <strong className="text-white">DJ Bryan</strong> não toca apenas músicas; ele cria atmosferas. Sua jornada começou nos clubes underground de São Paulo e rapidamente escalou para os principais festivais do Brasil.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Conhecido por sua versatilidade técnica e leitura de pista impecável, Bryan transita fluidamente entre o Deep House melódico e o Techno pulsante, garantindo que a energia nunca caia.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-display font-bold text-neon-green mb-2">10+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Anos de Carreira</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-display font-bold text-neon-purple mb-2">500+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Shows Realizados</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-display font-bold text-neon-pink mb-2">1M+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Streams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;