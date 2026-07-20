
export interface GalleryImage {
  url: string;
  caption: string;
  phase: string;
}

export interface Project {
  id: string;
  title: string;
  // Fix: Updated category union to match the actual service areas de Grupo-AR
  category: 'Electricidad' | 'Industrial' | 'Telecomunicaciones' | 'Remodelaciones' | 'Impermeabilización' | 'Construcciones' | 'Equipo' | 'Ingeniería';
  description: string;
  fullDescription: string;
  services: string[];
  imageUrl: string;
  images?: GalleryImage[];
  year: number;
  client?: string;
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
