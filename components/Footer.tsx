import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          
          <a href="#home" className="text-2xl font-display font-bold tracking-wider text-white hover:opacity-80 transition-opacity">
            DJ <span className="text-neon-blue">BRYAN</span>
          </a>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.platform} 
                href={social.url} 
                className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label={social.platform}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} DJ Bryan Official. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;