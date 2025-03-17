
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 pb-8 netflix-container">
      <div className="flex items-center space-x-6 mb-6">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-netflix-gray hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-netflix-gray hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:info@example.com" className="text-netflix-gray hover:text-white transition-colors">
          <Mail size={20} />
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-netflix-gray mb-6">
        <a href="#" className="hover:text-white transition-colors">Audio Description</a>
        <a href="#" className="hover:text-white transition-colors">Projects Relation</a>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        <a href="#" className="hover:text-white transition-colors">Help Center</a>
        <a href="#" className="hover:text-white transition-colors">Jobs</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
        <a href="#" className="hover:text-white transition-colors">Legal Notices</a>
      </div>
      
      <div className="text-netflix-gray text-xs">
        <p>© 2023 Portfolio, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
