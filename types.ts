
export interface GalleryImage {
  url: string;
  caption?: string;
  phase?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Electricidad' | 'Industrial' | 'Telecomunicaciones' | 'Remodelaciones' | 'Impermeabilización' | 'Construcciones' | 'Construcción' | 'Equipo' | 'Ingeniería';
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
