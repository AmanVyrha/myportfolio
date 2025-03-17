import { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';

interface VideoCardProps {
  title: string;
  image: string;
  videoSrc?: string;
  tags?: string[];
  type?: 'project' | 'skill' | 'experience';
  onClick?: () => void;
}

const VideoCard = ({ title, image, videoSrc, tags, type = 'project', onClick }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle both click and touch for mobile
  const handleTouchStart = () => {
    if (isMobile) {
      setIsHovered(true);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      // Keep hover state for a bit to allow interactions
      setTimeout(() => setIsHovered(false), 3000);
    }
  };

  return (
    <div 
      className="video-card min-w-[200px] h-[130px] sm:min-w-[220px] sm:h-[140px] md:min-w-[280px] md:h-[160px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onClick}
    >
      {/* Preview Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay with info - always visible */}
      <div className="video-card-overlay opacity-100">
        <h3 className="text-white text-xs sm:text-sm font-medium mb-1 line-clamp-1">{title}</h3>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {tags.slice(0, isMobile ? 2 : 3).map((tag, index) => (
              <span key={index} className="text-xs bg-white/20 px-1.5 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
            {tags.length > (isMobile ? 2 : 3) && (
              <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-sm">+{tags.length - (isMobile ? 2 : 3)}</span>
            )}
          </div>
        )}
        
        <div className="flex space-x-2">
          <button className="p-1 sm:p-1.5 bg-white rounded-full" aria-label="Play">
            <Play size={isMobile ? 12 : 15} className="text-netflix-black" fill="currentColor" />
          </button>
          <button className="p-1 sm:p-1.5 bg-netflix-gray/50 rounded-full border border-white/40" aria-label="More info">
            <Info size={isMobile ? 12 : 15} className="text-white" />
          </button>
        </div>
      </div>
      
      {/* Video preview on hover - only if videoSrc is provided */}
      {isHovered && videoSrc && (
        <video 
          src={videoSrc}
          autoPlay 
          muted 
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
      )}
    </div>
  );
};

export default VideoCard;
