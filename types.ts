
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  videoPrompt: string;
  bgImage?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}