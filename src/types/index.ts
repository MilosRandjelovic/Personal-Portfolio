export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export interface Skill {
  title: string;
  skills: string[];
}