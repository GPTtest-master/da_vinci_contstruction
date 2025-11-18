export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
}

export interface LocationItem {
  id: string;
  city: string;
  slug: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  relatedServiceSlug: string;
  ctaText: string;
  iconId: 'peeling' | 'discolored' | 'water' | 'cracks' | 'dull' | 'mold' | 'yellow' | 'diy';
}