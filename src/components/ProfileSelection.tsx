import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  image: string;
  route: string;
  videoSrc?: string;
  gifSrc?: string;
}

interface ProfileSelectionProps {
  profiles: Profile[];
}

const ProfileSelection = ({ profiles }: ProfileSelectionProps) => {
  const navigate = useNavigate();
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);
  const [showVideoManager, setShowVideoManager] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
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

  const handleProfileSelect = (route: string) => {
    navigate(route);
  };

  const handleManageVideos = () => {
    setShowVideoManager(true);
  };
  
  const handleProfileVideoSelect = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  const handleCloseVideoManager = () => {
    setShowVideoManager(false);
    setSelectedProfile(null);
  };

  // Handle both mobile and desktop interactions
  const handleProfileInteraction = (profileId: string) => {
    if (isMobile) {
      if (hoveredProfile === profileId) {
        // If already selected, navigate to the route
        const profile = profiles.find(p => p.id === profileId);
        if (profile) {
          handleProfileSelect(profile.route);
        }
      } else {
        // Just select/preview it
        setHoveredProfile(profileId);
      }
    } else {
      // On desktop, navigate directly
      const profile = profiles.find(p => p.id === profileId);
      if (profile) {
        handleProfileSelect(profile.route);
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-3xl md:text-4xl mb-6 md:mb-10 font-netflix text-center">Who's Watching?</h1>
      
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            className="profile-card cursor-pointer"
            onClick={() => handleProfileInteraction(profile.id)}
            onMouseEnter={() => !isMobile && setHoveredProfile(profile.id)}
            onMouseLeave={() => !isMobile && setHoveredProfile(null)}
          >
            <div className="profile-image relative overflow-hidden">
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
              {(profile.videoSrc || profile.gifSrc) && (hoveredProfile === profile.id || (isMobile && hoveredProfile === profile.id)) && (
                <>
                  {profile.videoSrc && (
                    <video 
                      src={profile.videoSrc}
                      autoPlay 
                      muted 
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {profile.gifSrc && !profile.videoSrc && (
                    <img 
                      src={profile.gifSrc}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {isMobile && (
                    <div className="absolute top-0 right-0 m-1 p-1 bg-netflix-red rounded-full">
                      <X size={16} className="text-white" />
                    </div>
                  )}
                </>
              )}
            </div>
            <span className="profile-name">{profile.name}</span>
          </div>
        ))}
      </div>

      <button 
        className="mt-8 md:mt-12 text-gray-400 hover:text-white transition"
        onClick={handleManageVideos}
      >
        Manage Profile Videos
      </button>

      {showVideoManager && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-netflix-dark p-4 md:p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl md:text-2xl">Manage Profile Videos</h2>
              <button 
                onClick={handleCloseVideoManager}
                className="text-white hover:text-netflix-red"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              {profiles.map(profile => (
                <div 
                  key={profile.id}
                  className={`p-4 rounded-md cursor-pointer ${selectedProfile === profile.id ? 'bg-netflix-red bg-opacity-20' : 'hover:bg-gray-800'}`}
                  onClick={() => handleProfileVideoSelect(profile.id)}
                >
                  <div className="flex items-center">
                    <img 
                      src={profile.image} 
                      alt={profile.name} 
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="text-white text-lg md:text-xl">{profile.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {profile.videoSrc ? "Video assigned" : profile.gifSrc ? "GIF assigned" : "No video/GIF assigned"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedProfile && (
              <div className="mt-6 border-t border-gray-700 pt-6">
                <h3 className="text-white text-lg md:text-xl mb-4">Upload Media</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Video (MP4)</label>
                    <input 
                      type="file" 
                      accept="video/mp4"
                      className="w-full text-gray-400 bg-gray-800 p-2 rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">GIF</label>
                    <input 
                      type="file" 
                      accept="image/gif"
                      className="w-full text-gray-400 bg-gray-800 p-2 rounded-md text-sm"
                    />
                  </div>
                  <p className="text-gray-500 text-xs">
                    Note: These inputs are placeholders. Real upload functionality would require server-side implementation.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end space-x-4">
              <button 
                className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition text-sm"
                onClick={handleCloseVideoManager}
              >
                Close
              </button>
              <button 
                className="px-3 py-1.5 md:px-4 md:py-2 bg-netflix-red text-white rounded-md hover:bg-red-700 transition text-sm"
                onClick={handleCloseVideoManager}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSelection;
