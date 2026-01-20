import React from 'react';
import { Event, Track } from './types';
import { Instagram, Youtube, Music } from 'lucide-react';

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
    title: 'Festa Privada',
    date: '07 FEV 2026',
    location: 'Salvador-BA',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    time: '18:00 - 22:00'
  },
  {
    id: 2,
    title: 'Em Aberto',
    date: 'Em Breve',
    location: '',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    time: ''
  },
  {
    id: 3,
    title: 'Em Aberto',
    date: 'Em Breve',
    location: '',
    image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop',
    time: ''
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
  { platform: 'Instagram', url: 'https://instagram.com/djbryan', icon: <Instagram className="w-6 h-6" /> },
  { platform: 'Spotify', url: 'https://open.spotify.com/track/59nCtzilZ0ByD51KTgO5GL?si=uKocv57mS1ahBcTSgHRhFQ', icon: <Music className="w-6 h-6" /> },
  { platform: 'Youtube', url: 'https://www.youtube.com/@djbryanclub/videos?app=desktop&view=0&sort=dd&shelf_id=1', icon: <Youtube className="w-6 h-6" /> },
];