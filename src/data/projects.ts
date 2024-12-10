import { type Project } from '../types';

export const projects: Project[] = [
  {
    title: 'React-Admin-Dashboard',
    description: 'Responsive modern React dashboard with many functions and charts.',
    image: '/admin-dashboard.png',
    technologies: ['React', 'Framer Motion', 'Recharts', 'Tailwind CSS']
  },
  {
    title: 'Movie Catalog',
    description: 'Movie app similar to IMDB with search functionality.',
    image: '/movie-catalog.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Next Themes']
  },
  {
    title: 'QR Code Generator',
    description: 'QR code generator with possibility to download as image.',
    image: '/qr-code-generator.png',
    technologies: ['Next.js', 'Typescript', 'Shadcn UI', 'Tailwind CSS']
  }
];