import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-blue-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              "Great web development is about creating experiences, not just websites."
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/MilosRandjelovic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/milos-randjelovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <Linkedin size={24} />
            </a>
           
          </div>
        </div>
        <div className="text-center mt-4 text-sm">
          <p>© {new Date().getFullYear()} Milos Randjelovic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;