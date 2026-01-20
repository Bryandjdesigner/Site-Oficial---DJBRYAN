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
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              A Batida que <span className="text-neon-blue">Move Você</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              <strong className="text-white">DJ BRYAN</strong> é a definição do artista multimídia contemporâneo. Nascido em Salvador, o berço rítmico do Brasil, ele carrega em seu DNA o groove do Pagodão e a energia solar da Bahia.
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-neon-green">Experiência Internacional e Versatilidade</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sua carreira ganhou projeção e sofisticação durante sua trajetória no Club Med, onde atuou como DJ e entertainer. Essa fase foi fundamental para lapidar sua leitura de pista, atendendo a públicos de diversas nacionalidades e dominando a arte de misturar ritmos globais com a essência brasileira.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-neon-purple">A Conexão Rio-Bahia</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Em sua passagem pelo Rio de Janeiro, Bryan mergulhou na cena urbana e eletrônica da capital fluminense, expandindo suas referências e consolidando sua rede de contatos profissionais. Essa bagagem carioca trouxe ao seu som uma estética moderna, resultando em produções que hoje navegam com maestria entre o Afro House, o Brazilian Bass e as batidas eletrônicas de vanguarda.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 mt-6">
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