import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Calendar, Camera, Compass, Map, Mountain, Flag } from 'lucide-react';

// Adventure data
const adventures = [
  {
    id: 'adv1',
    title: 'Dublin Adventure',
    location: 'Dublin, Ireland',
    date: 'Current',
    description: 'Exploring the vibrant capital of Ireland, from the historic Trinity College to the lively Temple Bar district.',
    highlights: [
      'Visited Trinity College and saw the Book of Kells',
      'Explored the Guinness Storehouse',
      'Walked through Phoenix Park',
      'Enjoyed traditional Irish music in Temple Bar'
    ],
    image: '/background-clips/adventure.gif',
    category: 'City Exploration'
  },
  {
    id: 'adv2',
    title: 'Wicklow Mountains Trek',
    location: 'County Wicklow, Ireland',
    date: '2023',
    description: 'A breathtaking hike through the stunning Wicklow Mountains National Park, often called the "Garden of Ireland".',
    highlights: [
      'Hiked to the summit of Lugnaquilla',
      'Visited Glendalough monastic site',
      'Photographed the beautiful landscape',
      'Camped under the stars'
    ],
    image: 'public/assets/content/adventures/wicklow.gif',
    category: 'Hiking'
  },
  {
    id: 'adv3',
    title: 'Delhi Heritage Tour',
    location: 'Delhi, India',
    date: '2022',
    description: 'Explored the rich historical heritage of Old and New Delhi, experiencing the blend of ancient and modern India.',
    highlights: [
      'Visited the Red Fort and Jama Masjid',
      'Explored Chandni Chowk by rickshaw',
      'Toured the magnificent Humayun\'s Tomb',
      'Experienced the grandeur of Qutub Minar'
    ],
    image: 'public/assets/content/adventures/delhi.gif',
    category: 'Cultural'
  },
  {
    id: 'adv4',
    title: 'Agra Weekend Trip',
    location: 'Agra, India',
    date: '2022',
    description: 'A weekend expedition to see one of the world\'s most famous monuments - the Taj Mahal.',
    highlights: [
      'Witnessed the Taj Mahal at sunrise',
      'Explored Agra Fort',
      'Visited Fatehpur Sikri',
      'Enjoyed local cuisine'
    ],
    image: 'public/assets/content/adventures/agra.gif',
    category: 'Historical'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Adventures' },
  { id: 'city', name: 'City Exploration' },
  { id: 'hiking', name: 'Hiking' },
  { id: 'cultural', name: 'Cultural' },
  { id: 'historical', name: 'Historical' }
];

const AdventurePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAdventure, setSelectedAdventure] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = "Adventures | Aman Vyrha";
  }, []);
  
  const filteredAdventures = activeCategory === 'all' 
    ? adventures 
    : adventures.filter(adv => adv.category.toLowerCase().includes(activeCategory.toLowerCase()));
  
  const getSelectedAdventure = () => {
    return adventures.find(adv => adv.id === selectedAdventure);
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar profileName="Aman Vyrha" />
      
      <div className="relative pt-28 pb-10">
        <div 
          className="absolute top-0 left-0 right-0 h-64 bg-cover bg-center z-0 opacity-50"
          style={{ backgroundImage: `url(/background-clips/adventure.gif)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-netflix-black via-netflix-black/60 to-netflix-black"></div>
        </div>
        
        <div className="netflix-container relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h1 className="text-4xl text-netflix-red font-bold mb-4 md:mb-0">
              My Adventures
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button 
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeCategory === category.id 
                      ? 'bg-netflix-red text-white' 
                      : 'bg-netflix-darkgray text-white/70 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAdventures.map(adventure => (
              <div 
                key={adventure.id}
                className="bg-netflix-darkgray rounded-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedAdventure(adventure.id)}
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${adventure.image})` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-netflix-black/90 to-transparent flex items-end">
                    <div className="p-4">
                      <h2 className="text-white text-xl font-bold">{adventure.title}</h2>
                      <div className="flex items-center text-white/70 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>{adventure.location}</span>
                        <span className="mx-2">•</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{adventure.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 mb-3 line-clamp-2">{adventure.description}</p>
                  <span className="inline-block bg-netflix-red/20 text-netflix-red px-2 py-0.5 rounded text-xs">
                    {adventure.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {selectedAdventure && (
            <div className="fixed inset-0 bg-netflix-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
              <div className="bg-netflix-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div 
                  className="h-64 md:h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${getSelectedAdventure()?.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-netflix-dark/60 to-transparent"></div>
                  <button 
                    className="absolute top-4 right-4 bg-netflix-black/60 text-white p-2 rounded-full hover:bg-netflix-red transition-colors"
                    onClick={() => setSelectedAdventure(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-white text-3xl font-bold">{getSelectedAdventure()?.title}</h3>
                    <div className="flex items-center text-white/80 mt-2">
                      <MapPin size={16} className="mr-1" />
                      <span className="mr-4">{getSelectedAdventure()?.location}</span>
                      <Calendar size={16} className="mr-1" />
                      <span>{getSelectedAdventure()?.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-white text-xl font-bold mb-3">About This Adventure</h4>
                    <p className="text-white/80">{getSelectedAdventure()?.description}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-bold mb-3 flex items-center">
                      <Flag size={18} className="text-netflix-red mr-2" />
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {getSelectedAdventure()?.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-white/80">
                          <span className="text-netflix-red mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button 
                      className="bg-netflix-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                      onClick={() => setSelectedAdventure(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdventurePage; 