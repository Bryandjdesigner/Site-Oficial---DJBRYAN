import React from 'react';
import { Event, Track } from './types';
import { Instagram, Youtube, Music, Twitter, Facebook } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Música', href: '#music' },
  { name: 'Agenda', href: '#schedule' },
  { name: 'Contato', href: '#contact' },
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 1,
    title: 'Neon Nights Festival',
    date: '15 AGO 2025',
    location: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    ticketLink: '#'
  },
  {
    id: 2,
    title: 'Sunset Club Opening',
    date: '22 AGO 2025',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.unsplash.com/photo-1574391884720-2e4537723bcd?q=80&w=2070&auto=format&fit=crop',
    ticketLink: '#'
  },
  {
    id: 3,
    title: 'Underground Warehouse',
    date: '05 SET 2025',
    location: 'Curitiba, PR',
    image: 'https://images.unsplash.com/photo-1576430652033-6627bd365922?q=80&w=2070&auto=format&fit=crop',
    ticketLink: '#'
  }
];

export const TOP_TRACKS: Track[] = [
  {
    id: 1,
    title: 'Despertar do Grave',
    genre: 'Afro House',
    duration: '3:45',
    plays: '1.2M',
    image: 'https://i.imgur.com/61YVTkw.jpeg',
    url: 'https://music.youtube.com/watch?v=P633IdQkKjk&list=OLAK5uy_l5cuEeA3xDJqf6Dt7CTrN-6r2QTM_WhuI'
  },
  {
    id: 2,
    title: 'Barril dobrado',
    genre: 'Trap',
    duration: '3:10',
    plays: '950K',
    image: 'https://i.imgur.com/fbbLk64.jpeg',
    url: 'https://music.youtube.com/watch?v=BwKsRwO0OtQ&list=OLAK5uy_l5cuEeA3xDJqf6Dt7CTrN-6r2QTM_WhuI'
  },
  {
    id: 3,
    title: 'Trópiko',
    genre: 'Progressive',
    duration: '5:15',
    plays: '500K',
    image: 'https://i.imgur.com/uYWaeRF.jpeg',
    url: 'https://music.youtube.com/watch?v=kJBihqmo7Vg&list=OLAK5uy_l5cuEeA3xDJqf6Dt7CTrN-6r2QTM_WhuI'
  }
];

export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: '#', icon: <Instagram className="w-6 h-6" /> },
  { platform: 'Spotify', url: '#', icon: <Music className="w-6 h-6" /> },
  { platform: 'Youtube', url: '#', icon: <Youtube className="w-6 h-6" /> },
  { platform: 'Twitter', url: '#', icon: <Twitter className="w-6 h-6" /> },
  { platform: 'Facebook', url: '#', icon: <Facebook className="w-6 h-6" /> },
];