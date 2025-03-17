import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundReady, setIsSoundReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/assets/sounds/nouveau-jingle-netflix.mp3');
    
    // Preload the sound
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.addEventListener('canplaythrough', () => {
        setIsSoundReady(true);
        // Auto play the sound when it's ready
        if (audioRef.current) {
          audioRef.current.play().catch(error => {
            console.error('Error auto-playing sound:', error);
          });
        }
      });
    }
    
    // Simulate loading time and handle transition
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start transition after loading
      setTimeout(() => {
        setIsTransitioning(true);
        // Navigate after transition animation
        setTimeout(() => {
          navigate('/profiles');
        }, 1000); // Match this with CSS transition duration
      }, 500);
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [navigate]);

  return (
    <div 
      className={`min-h-screen flex flex-col items-center justify-center bg-netflix-black transition-opacity duration-1000 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="mb-8 text-center">
        <h1 
          className="text-netflix-red font-netflix text-6xl md:text-7xl mb-4 transition-transform duration-300"
        >
          AMAN VYRHA
        </h1>
        <p className="text-white text-xl md:text-2xl font-light animate-pulse">
          Explore the world of Aman
        </p>
      </div>
      {isLoading && (
        <div className="text-netflix-red text-xl font-bold animate-pulse mt-8">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Index;
