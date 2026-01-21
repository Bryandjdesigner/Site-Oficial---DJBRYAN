import React, { useState } from 'react';
import Section from './Section';
import { TOP_TRACKS } from '../constants';
import { Play, Share2, Heart, Youtube, Music as MusicIcon } from 'lucide-react';
import { Track } from '../types';

interface TrackWithState extends Track {
  isLiked: boolean;
}

const Music: React.FC = () => {
  // Initialize state with tracks and an 'isLiked' property
  const [tracks, setTracks] = useState<TrackWithState[]>(
    TOP_TRACKS.map(track => ({ ...track, isLiked: false }))
  );

  const handleLike = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent opening the link when clicking the heart

    setTracks(currentTracks => 
      currentTracks.map(track => {
        if (track.id === id) {
          const newIsLiked = !track.isLiked;
          return {
            ...track,
            isLiked: newIsLiked,
            likes: newIsLiked ? track.likes + 1 : track.likes - 1
          };
        }
        return track;
      })
    );
  };

  const formatLikes = (num: number) => {
    return new Intl.NumberFormat('pt-BR', { notation: "compact", compactDisplay: "short" }).format(num);
  };

  return (
    <Section id="music" className="bg-black bg-mesh bg-cover bg-no-repeat bg-fixed">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
              Últimos <span className="text-neon-green">Lançamentos</span>
            </h2>
            <p className="text-gray-300 max-w-lg">
              Ouça as faixas originais, remixes e sets exclusivos diretamente do estúdio.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://open.spotify.com/track/59nCtzilZ0ByD51KTgO5GL?si=uKocv57mS1ahBcTSgHRhFQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold uppercase tracking-widest text-xs rounded transition-all"
            >
              <MusicIcon className="w-4 h-4" />
              Spotify
            </a>
            <a 
              href="https://music.youtube.com/watch?v=P633IdQkKjk&list=OLAK5uy_l5cuEeA3xDJqf6Dt7CTrN-6r2QTM_WhuI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold uppercase tracking-widest text-xs rounded transition-all"
            >
              <Youtube className="w-4 h-4" />
              YouTube Music
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {tracks.map((track, index) => (
            <a 
              key={track.id} 
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center bg-black/40 backdrop-blur-sm border border-white/5 hover:bg-white/10 p-4 rounded-xl transition-all cursor-pointer"
            >
              <span className="text-2xl font-bold text-gray-600 w-12 text-center group-hover:text-neon-green transition-colors font-display">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="relative w-16 h-16 rounded overflow-hidden mx-4 flex-shrink-0">
                <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>

              <div className="flex-grow min-w-0 mr-4">
                <h3 className="text-lg md:text-xl font-bold text-white truncate group-hover:text-neon-green transition-colors">{track.title}</h3>
                <p className="text-sm text-gray-400">{track.genre}</p>
              </div>

              {/* Likes Section - Replacing Plays */}
              <div className="flex items-center gap-2 mr-6 md:mr-10">
                <button 
                  className={`transition-all duration-300 transform hover:scale-125 ${track.isLiked ? 'text-neon-pink' : 'text-gray-500 hover:text-neon-pink'}`}
                  onClick={(e) => handleLike(e, track.id)}
                  title={track.isLiked ? "Descurtir" : "Curtir"}
                >
                  <Heart className={`w-6 h-6 ${track.isLiked ? 'fill-current' : ''}`} />
                </button>
                <span className={`text-sm font-mono font-bold ${track.isLiked ? 'text-neon-pink' : 'text-gray-400'}`}>
                  {formatLikes(track.likes)}
                </span>
              </div>

              <div className="text-gray-400 text-sm font-mono mr-4 hidden sm:block">
                {track.duration}
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-gray-400 hover:text-neon-blue" onClick={(e) => e.preventDefault()}>
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Music;