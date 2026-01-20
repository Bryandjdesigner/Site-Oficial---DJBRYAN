import React from 'react';

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  ticketLink?: string;
  time?: string;
}

export interface Track {
  id: number;
  title: string;
  genre: string;
  duration: string;
  plays: string;
  image: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}