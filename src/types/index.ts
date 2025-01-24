export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  specifications?: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  imageUrl: string;
}