import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  // For dynamic equalizer effect
  const [barHeights, setBarHeights] = useState<number[]>(Array(8).fill(20));

  useEffect(() => {
    // Update bar heights every 300ms for animation
    const interval = setInterval(() => {
      setBarHeights(Array(8).fill(0).map(() => Math.floor(Math.random() * 60) + 20));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="text-center z-10 mb-12">
        {/* Spotify Logo */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
            <svg className="w-20 h-20 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.392 17.267a.75.75 0 01-1.026.273c-2.799-1.71-6.328-2.096-10.482-1.147a.75.75 0 01-.276-1.472c4.543-1.049 8.458-.596 11.511 1.32a.75.75 0 01.273 1.026zm1.44-3.206a.938.938 0 01-1.282.341c-3.206-1.968-8.092-2.537-11.884-1.388a.938.938 0 01-.545-1.795c4.325-1.308 9.709-.666 13.37 1.559.444.271.585.853.341 1.283zm.123-3.339C15.14 8.55 8.802 8.32 5.13 9.46c-.565.175-1.162-.149-1.337-.713-.175-.565.148-1.162.713-1.337 4.243-1.284 11.298-1.036 15.735 1.594.534.318.708 1.006.39 1.54-.317.534-1.005.709-1.539.39z" />
            </svg>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            AMAN VYRHA
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto my-4 rounded-full"></div>
        </div>
        
        {/* Equalizer animation */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {barHeights.map((height, i) => (
            <div 
              key={i}
              className="w-1.5 bg-green-500 rounded-full transition-all duration-300" 
              style={{ height: `${height}px` }}
            ></div>
          ))}
        </div>
        
        <p className="text-green-400 font-semibold mt-8 animate-pulse">LOADING...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
