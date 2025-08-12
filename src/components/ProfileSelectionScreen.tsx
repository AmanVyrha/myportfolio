import React from 'react';
import { User } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  color: string;
  description: string;
  imageSrc?: string;
}

interface ProfileSelectionScreenProps {
  profiles: Profile[];
  onProfileSelect: (profileId: string) => void;
}

const ProfileSelectionScreen: React.FC<ProfileSelectionScreenProps> = ({ profiles, onProfileSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxYTFhMWEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] bg-repeat"></div>
      </div>
      
      {/* Main content with z-index to appear above background */}
      <div className="text-center mb-16 profile-enter">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.392 17.267a.75.75 0 01-1.026.273c-2.799-1.71-6.328-2.096-10.482-1.147a.75.75 0 01-.276-1.472c4.543-1.049 8.458-.596 11.511 1.32a.75.75 0 01.273 1.026zm1.44-3.206a.938.938 0 01-1.282.341c-3.206-1.968-8.092-2.537-11.884-1.388a.938.938 0 01-.545-1.795c4.325-1.308 9.709-.666 13.37 1.559.444.271.585.853.341 1.283zm.123-3.339C15.14 8.55 8.802 8.32 5.13 9.46c-.565.175-1.162-.149-1.337-.713-.175-.565.148-1.162.713-1.337 4.243-1.284 11.298-1.036 15.735 1.594.534.318.708 1.006.39 1.54-.317.534-1.005.709-1.539.39z" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text-green">
            AMAN VYRHA
          </h1>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Who's listening?
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
      </div>

      <div className="z-10 relative w-full max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 justify-center">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => onProfileSelect(profile.id)}
              className="group cursor-pointer text-center transition-all duration-300 hover:scale-105 profile-enter"
              style={{ animationDelay: `${parseInt(profile.id, 36) % 5 * 0.1}s` }}
            >
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-300 overflow-hidden`}>
                {profile.imageSrc ? (
                  <img 
                    src={profile.imageSrc}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16 md:w-20 md:h-20 text-white" />
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-100 group-hover:text-green-400 transition-colors">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-400 mt-2 opacity-70 group-hover:opacity-100 transition-opacity max-w-[180px] mx-auto">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-gray-300 hover:text-white transition-colors border border-gray-600 hover:border-green-500 hover:bg-green-500/10 px-8 py-3 rounded-full font-medium text-sm tracking-wide">
            MANAGE PROFILES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelectionScreen;
