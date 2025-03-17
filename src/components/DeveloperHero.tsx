import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DeveloperHeroProps {
  title?: string;
  name?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const DeveloperHero = ({
  title = "DATA ANALYST",
  name = "Aman Vyrha",
  subtitle = "Transforming data into actionable insights through statistical analysis, machine learning, and data visualization",
  backgroundImage = "/background-clips/default-bg.jpg"
}: DeveloperHeroProps) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center z-10 px-4">
        <div className="text-netflix-red font-netflix text-4xl mb-4">
          {title}
        </div>
        
        <h1 className="text-white text-7xl md:text-9xl font-bold mb-6">
          {name}
        </h1>
        
        <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <span className="bg-netflix-gray/40 text-white px-4 py-1 rounded-full text-sm">Dublin, Ireland</span>
          <span className="bg-netflix-gray/40 text-white px-4 py-1 rounded-full text-sm">manvirha12@gmail.com</span>
          <span className="bg-netflix-gray/40 text-white px-4 py-1 rounded-full text-sm">+353 870 313 241</span>
        </div>
        
        <button 
          onClick={() => navigate('/developer/projects')}
          className="netflix-button text-xl px-8 py-2"
        >
          View Projects
        </button>
      </div>
      
      <div className="absolute bottom-12 animate-bounce">
        <ChevronDown className="text-white" size={40} />
      </div>
    </div>
  );
};

export default DeveloperHero;
