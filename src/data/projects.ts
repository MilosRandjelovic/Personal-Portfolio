import { type Project } from '../types';

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'Firebase', 'Material-UI']
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with detailed forecasts and map integration.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'OpenWeather API', 'Chart.js']
  }
];