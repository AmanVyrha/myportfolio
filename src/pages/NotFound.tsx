
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-netflix-black text-white">
      <h1 className="text-netflix-red text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">This page is missing, like a deleted scene.</p>
      <button 
        onClick={() => navigate('/')} 
        className="netflix-button mt-4"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
