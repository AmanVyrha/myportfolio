import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const Hero = ({ 
  title, 
  description, 
  backgroundImage = "/background-clips/default-bg.jpg" 
}: HeroProps) => {
  return (
    <div className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="hero-background"
        style={{ 
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full netflix-container flex flex-col justify-center px-6 md:px-8">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl mt-8 md:mt-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">{title}</h1>
          <p className="text-white text-sm sm:text-base md:text-lg mb-4 md:mb-6">{description}</p>
          
          <div className="flex space-x-3 md:space-x-4">
            <button className="flex items-center justify-center bg-white hover:bg-gray-200 text-netflix-black py-1.5 px-3 md:py-2 md:px-6 rounded text-sm md:text-base">
              <Play className="mr-1 md:mr-2" size={16} />
              <span className="font-medium">Play</span>
            </button>
            <Link to="/about" className="flex items-center justify-center bg-netflix-gray/80 hover:bg-netflix-gray/60 text-white py-1.5 px-3 md:py-2 md:px-6 rounded text-sm md:text-base">
              <Info className="mr-1 md:mr-2" size={16} />
              <span className="font-medium">More Info</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
