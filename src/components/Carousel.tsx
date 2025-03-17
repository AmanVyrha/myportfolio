import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './VideoCard';

interface CarouselProps {
  title: string;
  items: {
    id: string;
    title: string;
    image: string;
    videoSrc?: string;
    tags?: string[];
    type?: 'project' | 'skill' | 'experience';
  }[];
  onItemClick?: (id: string) => void;
}

const Carousel = ({ title, items, onItemClick }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = isMobile ? clientWidth * 0.9 : clientWidth * 0.75;
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="netflix-container px-6 md:px-6 mb-8">
      <h2 className="category-title mb-3">{title}</h2>
      
      <div className="relative group">
        {/* Left Arrow - Only show on non-mobile or if scrolled */}
        {showLeftArrow && (
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-netflix-black/80 rounded-full p-1 
                      opacity-70 hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={isMobile ? 20 : 24} className="text-white" />
          </button>
        )}
        
        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="carousel snap-x snap-mandatory"
          onScroll={handleScroll}
        >
          {items.map((item) => (
            <div key={item.id} className="snap-start">
              <VideoCard 
                title={item.title}
                image={item.image}
                videoSrc={item.videoSrc}
                tags={item.tags}
                type={item.type}
                onClick={() => onItemClick && onItemClick(item.id)}
              />
            </div>
          ))}
        </div>
        
        {/* Right Arrow - Only show on non-mobile or if scrollable */}
        {showRightArrow && (
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-netflix-black/80 rounded-full p-1
                      opacity-70 hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={isMobile ? 20 : 24} className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
