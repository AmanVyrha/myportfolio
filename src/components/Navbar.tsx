import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bell, Search, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  profileName?: string;
}

const Navbar = ({ profileName = "User" }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = () => {
    navigate('/profiles');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ${isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-netflix-black/80 to-transparent'}`}>
      <div className="netflix-container flex items-center justify-between py-4">
        <div className="flex items-center space-x-4 md:space-x-8">
          <button onClick={handleLogoClick} className="text-netflix-red font-bold text-xl md:text-2xl">AMAN VYRHA</button>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 text-sm">Home</Link>
            <Link to="/projects" className="text-white hover:text-gray-300 text-sm">Projects</Link>
            <Link to="/skills" className="text-white hover:text-gray-300 text-sm">Skills</Link>
            <Link to="/experience" className="text-white hover:text-gray-300 text-sm">Experience</Link>
            <Link to="/adventures" className="text-white hover:text-gray-300 text-sm">Adventures</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 text-sm">Contact</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white hidden md:block">
            <Search size={20} />
          </button>
          <button className="text-white hidden md:block">
            <Bell size={20} />
          </button>
          <div 
            onClick={() => navigate('/profiles')} 
            className="flex items-center cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-netflix-red flex items-center justify-center text-white font-bold mr-2">
              <User size={16} />
            </div>
            <span className="text-white text-sm hidden md:block">{profileName}</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white ml-2" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-netflix-black border-t border-netflix-gray/20 py-4">
          <div className="netflix-container flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gray-300 py-2">Home</Link>
            <Link to="/projects" className="text-white hover:text-gray-300 py-2">Projects</Link>
            <Link to="/skills" className="text-white hover:text-gray-300 py-2">Skills</Link>
            <Link to="/experience" className="text-white hover:text-gray-300 py-2">Experience</Link>
            <Link to="/adventures" className="text-white hover:text-gray-300 py-2">Adventures</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
