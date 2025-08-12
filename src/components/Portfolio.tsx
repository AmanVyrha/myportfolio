import React, { useState } from 'react';
import { Award, Briefcase, ChevronDown, ChevronLeft, ChevronRight, Code, Download, ExternalLink, Eye, Linkedin, Mail, MapPin, Phone, Play, User, ChevronUp } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured: boolean;
  imageSrc?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface PortfolioProps {
  onBackToProfiles: () => void;
  selectedProfile: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
}

const Portfolio: React.FC<PortfolioProps> = ({
  onBackToProfiles,
  selectedProfile,
  skills,
  projects,
  experience
}) => {
  const [profileView, setProfileView] = React.useState<'compact' | 'detailed'>('compact');
  const [activeSection, setActiveSection] = React.useState('about');
  // State for mobile sidebar toggle managed elsewhere
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  // Track scroll position for the active section and player progress
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      
      // Calculate scroll progress for player bar
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(Math.max(scrolled / windowHeight, 0), 1);
      setScrollProgress(progress);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // State to control mobile sidebar visibility
  const [showMobileSidebar, setShowMobileSidebar] = React.useState(false);

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* Mobile header - visible only on mobile */}
      <div className="sticky top-0 z-50 bg-black flex items-center justify-between p-4 md:hidden">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.392 17.267a.75.75 0 01-1.026.273c-2.799-1.71-6.328-2.096-10.482-1.147a.75.75 0 01-.276-1.472c4.543-1.049 8.458-.596 11.511 1.32a.75.75 0 01.273 1.026zm1.44-3.206a.938.938 0 01-1.282.341c-3.206-1.968-8.092-2.537-11.884-1.388a.938.938 0 01-.545-1.795c4.325-1.308 9.709-.666 13.37 1.559.444.271.585.853.341 1.283zm.123-3.339C15.14 8.55 8.802 8.32 5.13 9.46c-.565.175-1.162-.149-1.337-.713-.175-.565.148-1.162.713-1.337 4.243-1.284 11.298-1.036 15.735 1.594.534.318.708 1.006.39 1.54-.317.534-1.005.709-1.539.39z" />
          </svg>
          <span className="font-bold text-base tracking-tight">AMAN VYRHA</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMobileSidebar}
            className="bg-transparent text-white rounded-full p-1.5 hover:bg-gray-800 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Spotify-style left sidebar - fixed on desktop, slide in/out on mobile */}
      <aside className={`bg-[#000000] md:w-64 lg:w-72 md:fixed md:h-screen md:overflow-y-auto z-40 transition-all duration-300 ${showMobileSidebar ? 'fixed inset-0 w-3/4 h-screen overflow-y-auto' : 'hidden md:block'}`}>
        <div className="p-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg className="w-9 h-9 text-[#1DB954] animate-pulse-subtle" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.392 17.267a.75.75 0 01-1.026.273c-2.799-1.71-6.328-2.096-10.482-1.147a.75.75 0 01-.276-1.472c4.543-1.049 8.458-.596 11.511 1.32a.75.75 0 01.273 1.026zm1.44-3.206a.938.938 0 01-1.282.341c-3.206-1.968-8.092-2.537-11.884-1.388a.938.938 0 01-.545-1.795c4.325-1.308 9.709-.666 13.37 1.559.444.271.585.853.341 1.283zm.123-3.339C15.14 8.55 8.802 8.32 5.13 9.46c-.565.175-1.162-.149-1.337-.713-.175-.565.148-1.162.713-1.337 4.243-1.284 11.298-1.036 15.735 1.594.534.318.708 1.006.39 1.54-.317.534-1.005.709-1.539.39z" />
              </svg>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#1DB954] rounded-full border-2 border-black"></div>
            </div>
            <span className="font-bold text-lg tracking-tight">AMAN VYRHA</span>
          </div>
        </div>
        
        {/* Close button for mobile sidebar */}
        <div className="flex justify-end p-2 md:hidden">
          <button 
            onClick={() => setShowMobileSidebar(false)}
            className="text-gray-400 hover:text-white p-2"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation links - visible on both mobile and desktop */}
        <nav className="px-2 mt-2">
          <div className="flex flex-col gap-2 font-medium">
            {/* Home section */}
            <a 
              href="#about" 
              className={`flex items-center gap-4 px-4 py-2.5 rounded-md transition-colors ${activeSection === 'about' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <User className="w-5 h-5" strokeWidth={2.5} />
              <span>About</span>
            </a>
            
            {/* Skills section */}
            <a 
              href="#skills" 
              className={`flex items-center gap-4 px-4 py-2.5 rounded-md transition-colors ${activeSection === 'skills' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Code className="w-5 h-5" strokeWidth={2.5} />
              <span>Skills</span>
            </a>
            
            {/* Projects section */}
            <a 
              href="#projects" 
              className={`flex items-center gap-4 px-4 py-2.5 rounded-md transition-colors ${activeSection === 'projects' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Briefcase className="w-5 h-5" strokeWidth={2.5} />
              <span>Projects</span>
            </a>
            
            {/* Experience section */}
            <a 
              href="#experience" 
              className={`flex items-center gap-4 px-4 py-2.5 rounded-md transition-colors ${activeSection === 'experience' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Award className="w-5 h-5" strokeWidth={2.5} />
              <span>Experience</span>
            </a>
            
            {/* Contact section */}
            <a 
              href="#contact" 
              className={`flex items-center gap-4 px-4 py-2.5 rounded-md transition-colors ${activeSection === 'contact' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Mail className="w-5 h-5" strokeWidth={2.5} />
              <span>Contact</span>
            </a>
          </div>
          
          {/* Profile view toggle button - styled like Spotify's "Create Playlist" */}
          <div className="mt-8 px-4">
            <button 
              onClick={onBackToProfiles}
              className="w-full flex items-center gap-2 py-1.5 opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm overflow-hidden">
                <img src="/aman.jpg" alt="Aman" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium">Back to Profiles</span>
            </button>
            
            <button 
              onClick={() => setProfileView(profileView === 'compact' ? 'detailed' : 'compact')}
              className="w-full flex items-center gap-2 py-1.5 mt-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center rounded-sm">
                <Eye className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-medium">{profileView === 'compact' ? 'Detailed' : 'Compact'} View</span>
            </button>
          </div>
        </nav>
        
        <div className="px-2 mt-6">
          <div className="border-t border-gray-800 pt-6 px-4">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-5 uppercase">Playlists</h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer group transition-colors">
                <div className="w-12 h-12 overflow-hidden rounded-sm shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-[#1DB954] to-[#169c46] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm">Education</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <span>Playlist • MSc Data Analytics</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer group transition-colors">
                <div className="w-12 h-12 overflow-hidden rounded-sm shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm">Projects</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <span>Playlist • ML & AI Development</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer group transition-colors mt-2">
                <div className="w-12 h-12 overflow-hidden rounded-sm shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm">Experience</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <span>Playlist • Work History</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Black overlay when mobile sidebar is open */}
      {showMobileSidebar && (
        <div 
          className="fixed inset-0 bg-black/70 z-30 md:hidden"
          onClick={() => setShowMobileSidebar(false)}
        ></div>
      )}
      
      {/* Main content area - Spotify style */}
      <main className="flex-1 md:ml-64 lg:ml-72 pb-24 relative overflow-y-auto">
        {/* Top navigation bar - similar to Spotify's top bar */}
        <div className="sticky top-0 z-30 bg-gradient-to-b from-black/90 to-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center mb-4 md:mt-0 mt-14">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {/* Navigation controls - like Spotify */}
              <button className="bg-[#0A0A0A]/80 rounded-full p-2 opacity-70 hover:opacity-100 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="bg-[#0A0A0A]/80 rounded-full p-2 opacity-70 hover:opacity-100 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <h2 className="text-2xl font-bold">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setProfileView(profileView === 'compact' ? 'detailed' : 'compact')}
              className="bg-[#0A0A0A]/80 rounded-full p-2 opacity-70 hover:opacity-100 transition-all"
            >
              <Eye className="w-5 h-5" />
            </button>
            <div className="relative dropdown-container">
              <button 
                className="bg-white text-black rounded-full py-1.5 px-6 text-sm font-bold hover:scale-105 transition-all flex items-center gap-1"
                onClick={(e) => {
                  const dropdown = e.currentTarget.nextElementSibling;
                  if (dropdown?.classList.contains('hidden')) {
                    dropdown.classList.remove('hidden');
                  } else if (dropdown) {
                    dropdown.classList.add('hidden');
                  }
                }}
              >
                HIRE ME
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="hidden absolute right-0 mt-2 w-48 bg-[#282828] shadow-lg rounded-md overflow-hidden z-50 dropdown-menu">
                <a href="mailto:amanvirha12@gmail.com" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2 border-b border-[#3E3E3E]">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/aman-vyrha/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2 border-b border-[#3E3E3E]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/AmanVyrha" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2 border-b border-[#3E3E3E]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="/cv.pdf" download="Aman_Kumar_Virha_CV.pdf" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero section with Spotify style */}
        <section id="about" className="pt-4 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Profile header with Spotify-style gradient */}
          <div className="bg-gradient-to-b from-green-800/30 to-gray-900 rounded-xl p-8 mb-12">
            <div className="max-w-4xl mx-auto">
              {/* Profile View Toggle - Spotify style */}
              <div className="flex justify-end mb-8">
                <div className="bg-gray-900/70 rounded-full p-1 flex">
                  <button
                    onClick={() => setProfileView('compact')}
                    className={`px-4 py-1.5 rounded-full transition-all text-sm flex items-center ${
                      profileView === 'compact'
                        ? 'bg-[#1DB954] text-white font-medium'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Eye className="inline-block w-3.5 h-3.5 mr-1.5" />
                    Basic
                  </button>
                  <button
                    onClick={() => setProfileView('detailed')}
                    className={`px-4 py-1.5 rounded-full transition-all text-sm flex items-center ${
                      profileView === 'detailed'
                        ? 'bg-[#1DB954] text-white font-medium'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <User className="inline-block w-3.5 h-3.5 mr-1.5" />
                    Detailed
                  </button>
                </div>
              </div>

              {/* Spotify-style currently playing */}
              <div className="bg-gray-900/60 rounded-lg p-3 mb-6 flex items-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-[#1DB954] text-black w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition-all mr-3"
                >
                  {isPlaying ? (
                    <span className="w-3 h-3 rounded-sm bg-black"></span>
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>
                <div>
                  <div className="text-sm font-medium">
                    {isPlaying ? "Now playing" : "Press play to hear my story"}
                  </div>
                  <div className="text-xs text-gray-400">
                    {selectedProfile === 'recruiter' ? 'Professional Journey • Aman Vyrha' : 'Technical Deep Dive • Aman Vyrha'}
                  </div>
                </div>
              </div>
              
              {/* Compact Profile View */}
              {profileView === 'compact' && (
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl shadow-green-900/20">
                    <img src="/aman.jpg" alt="Aman Kumar Virha" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Aman Kumar Virha</h1>
                    <h2 className="text-xl text-[#1DB954] mb-4">Data Analytics & AI Developer</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Customer-focused MSc Data Analytics candidate with hands-on experience in AI, generative AI, data analytics, and digital transformation projects. Skilled in designing and supporting AI-driven applications, machine learning models, and data visualisation dashboards.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <button className="bg-[#1DB954] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1DB954] transition-colors flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download CV
                      </button>
                      <div className="flex gap-3">
                        <a href="https://a.amanvyrha.fun" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1DB954] hover:text-white transition-all">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/aman-kumar-virha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1DB954] hover:text-white transition-all">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:amanvirha12@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1DB954] hover:text-white transition-all">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Profile View */}
              {profileView === 'detailed' && (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl shadow-green-900/20 mx-auto md:mx-0">
                      <img src="/aman.jpg" alt="Aman Kumar Virha" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-4xl font-bold mb-2 text-center md:text-left">Aman Kumar Virha</h1>
                      <h2 className="text-xl text-[#1DB954] mb-4 text-center md:text-left">MSc Data Analytics Candidate</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 mb-6">
                        <div className="flex items-center gap-3">
                          <Mail className="text-gray-400 w-5 h-5" />
                          <span>amanvirha12@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="text-gray-400 w-5 h-5" />
                          <span>+353 870 313 241</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="text-gray-400 w-5 h-5" />
                          <span>Dublin, Ireland</span>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-semibold mb-3 text-[#1DB954]">Education</h3>
                        <div className="mb-4">
                          <h4 className="font-medium">MSc, Data Analytics</h4>
                          <p className="text-gray-400">Dublin Business School, Dublin (09/2024 – 08/2025)</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Specializing in machine learning, data mining, and visualization techniques.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-medium">BSc Computer Science</h4>
                          <p className="text-gray-400">University of Delhi (09/2021 – 07/2024)</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Graduated with honors, specializing in web development and software engineering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills section - improved for mobile */}
      <section id="skills" className="py-6 md:py-8 px-4 md:px-6 bg-gradient-to-b from-[#121212] to-black">
        <div className="mb-5 md:mb-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">Skills & Expertise</h2>
            <button className="text-gray-400 hover:text-white">
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 md:p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10"
              >
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <span className="font-medium text-sm md:text-base">{skill.name}</span>
                  <span className="text-[#1DB954] text-xs md:text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-gradient-to-r from-[#1DB954] to-[#169c46] h-1.5 md:h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Spotify style */}
      <section id="projects" className="py-6 md:py-8 px-4 md:px-6 bg-gradient-to-b from-[#121212] to-black">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <button className="p-1.5 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors">
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-900/10 flex flex-col ${
                  project.featured ? 'ring-1 ring-green-500' : ''
                }`}
              >
                {/* Project Image or Placeholder */}
                <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  {project.imageSrc ? (
                    <img 
                      src={project.imageSrc} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="w-12 h-12 text-green-600/40" />
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-3 left-3 bg-[#1DB954] text-xs font-medium px-2 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <a href={project.link} className="text-[#1DB954] hover:text-[#1DB954] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800/80 text-[#1DB954] px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Spotify style */}
      <section id="experience" className="py-6 md:py-8 px-4 md:px-6 bg-gradient-to-b from-[#121212] to-black">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
            <button className="p-1.5 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors">
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-5">
            {experience.map((job, index) => {
              const [expanded, setExpanded] = useState(false);
              // Split description into bullet points
              const bulletPoints = job.description.split('\n\n').filter(point => point.trim() !== '');
              const shortDescription = bulletPoints.length > 0 ? bulletPoints[0] : job.description;
              
              return (
                <div 
                  key={index}
                  className="bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 md:p-5 transition-all hover:shadow-lg hover:shadow-green-900/10 overflow-hidden mb-4 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base md:text-lg font-bold leading-tight pr-3">{job.title}</h3>
                    <a href={`#${job.company}`} className="text-[#1DB954] hover:text-[#1DB954] transition-colors flex-shrink-0">
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                  
                  {/* Show description differently based on expanded state */}
                  {!expanded ? (
                    <p className="text-gray-400 text-sm md:text-base mb-5 line-clamp-3">{shortDescription}</p>
                  ) : (
                    <div className="text-gray-300 text-sm md:text-base mb-5 space-y-4">
                      {bulletPoints.map((point, i) => (
                        <p key={i} className="flex gap-2.5">
                          <span className="text-[#1DB954] flex-shrink-0 mt-0.5">•</span>
                          <span>{point}</span>
                        </p>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-2 mt-auto pt-1">
                    <div className="flex flex-wrap gap-2.5">
                      <span className="bg-gray-900/70 text-[#1DB954] px-3.5 py-1.5 rounded-full text-sm whitespace-nowrap font-medium">{job.company}</span>
                      <span className="bg-gray-900/70 text-[#1DB954] px-3.5 py-1.5 rounded-full text-sm whitespace-nowrap font-medium">{job.period}</span>
                    </div>
                    
                    {bulletPoints.length > 1 && (
                      <button 
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-1.5 text-sm text-[#1DB954] hover:text-green-400 transition-colors"
                      >
                        {expanded ? (
                          <>
                            <span>Read less</span>
                            <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            <span>Read more</span>
                            <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section - Spotify style */}
      <section id="contact" className="py-6 md:py-8 px-4 md:px-6 bg-gradient-to-b from-[#121212] to-black">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">Let's Work Together</h2>
            <button className="p-1.5 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors">
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 mb-8">
            <div className="bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 md:p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-base md:text-lg font-bold leading-tight pr-1">Email</h3>
                <a href="mailto:amanvirha12@gmail.com" className="text-[#1DB954] hover:text-[#1DB954] transition-colors flex-shrink-0">
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium mb-2">amanvirha12@gmail.com</p>
              <div className="mt-auto pt-4">
                <Mail className="w-5 h-5 text-[#1DB954]" />
              </div>
            </div>
            
            <div className="bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 md:p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-base md:text-lg font-bold leading-tight pr-1">Phone</h3>
                <a href="tel:+353870313241" className="text-[#1DB954] hover:text-[#1DB954] transition-colors flex-shrink-0">
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium mb-2">+353 870 313 241</p>
              <div className="mt-auto pt-4">
                <Phone className="w-5 h-5 text-[#1DB954]" />
              </div>
            </div>
            
            <div className="bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 md:p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-base md:text-lg font-bold leading-tight pr-1">Location</h3>
                <a href="https://maps.google.com/?q=Dublin,Ireland" target="_blank" rel="noopener noreferrer" className="text-[#1DB954] hover:text-[#1DB954] transition-colors flex-shrink-0">
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium mb-2">Dublin, Ireland</p>
              <div className="mt-auto pt-4">
                <MapPin className="w-5 h-5 text-[#1DB954]" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="mailto:amanvirha12@gmail.com" 
              className="bg-[#1DB954] text-white px-6 py-3.5 md:py-3 rounded-full font-medium hover:bg-green-600 transition-colors flex items-center gap-3 hover:scale-105 transform shadow-lg shadow-green-900/20 text-base"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>

      {/* Now playing bar - Like Spotify's bottom player */}
      <footer className="fixed bottom-[60px] md:bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] py-3 px-4 z-40 md:left-64 lg:left-72">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 overflow-hidden rounded-sm shadow-lg group">
              <img 
                src="/aman.jpg" 
                alt="Aman Kumar Virha" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
              />
            </div>
            <div>
              <div className="text-white font-medium text-sm hover:underline cursor-pointer">Aman Kumar Vyrha</div>
              <div className="text-xs text-gray-400 hover:text-white hover:underline cursor-pointer transition-colors">Data Analytics & AI Developer</div>
            </div>
          </div>
          
          <div className="flex md:flex-col">
            {/* Mobile view - simplified */}
            <div className="flex md:hidden items-center justify-center w-full">
              <button className="bg-white rounded-full p-3 hover:scale-105 transition-transform shadow-md">
                <Play className="w-5 h-5 text-black fill-current" />
              </button>
            </div>
            
            {/* Desktop view - player controls aligned with progress bar */}
            <div className="hidden md:flex flex-col items-center gap-2">
              {/* Controls row */}
              <div className="flex items-center justify-center w-80 gap-6 mb-2">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path></svg>
                </button>
                <button className="bg-white rounded-full p-2.5 hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 text-black fill-current" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg>
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="w-80 h-1 bg-gray-700 rounded-full relative group">
                <div 
                  className="h-full bg-[#1DB954] group-hover:bg-[#1ED760] rounded-full transition-all duration-300" 
                  style={{ width: `${scrollProgress * 100}%` }}
                ></div>
                {/* Position indicator dot - only shown on hover */}
                <button 
                  className="absolute -top-1.5 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  style={{ left: `${scrollProgress * 100}%` }}
                ></button>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2 pr-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path></svg>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path></svg>
            </button>
          </div>
        </div>
        <div className="hidden md:block text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Spotify-inspired
          </div>
      </footer>
    
      {/* Spotify-style mobile bottom navigation - visible only on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-gray-800/30 py-2 md:hidden z-40">
        <div className="flex justify-around items-center px-2">
          <a href="#about" className={`flex flex-col items-center py-1.5 ${activeSection === 'about' ? 'text-white' : 'text-gray-400'}`}>
            <User className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">Home</span>
          </a>
          <a href="#skills" className={`flex flex-col items-center py-1.5 ${activeSection === 'skills' ? 'text-white' : 'text-gray-400'}`}>
            <Code className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">Skills</span>
          </a>
          <a href="#projects" className={`flex flex-col items-center py-1.5 ${activeSection === 'projects' ? 'text-white' : 'text-gray-400'}`}>
            <Award className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">Projects</span>
          </a>
          <a href="#contact" className={`flex flex-col items-center py-1.5 ${activeSection === 'contact' ? 'text-white' : 'text-gray-400'}`}>
            <Mail className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">Contact</span>
          </a>
        </div>
      </div>
    
      {/* Dropdown Menu for Hire Me button */}
      <div className="hidden dropdown-menu fixed top-14 right-4 w-48 bg-[#282828] shadow-lg rounded-md overflow-hidden z-50">
        <a href="mailto:aman.vyrha@gmail.com" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2 border-b border-[#3E3E3E]">
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/aman-vyrha/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2 border-b border-[#3E3E3E]">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/AmanVyrha" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2 border-b border-[#3E3E3E]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
        <a href="/cv.pdf" download="Aman_Kumar_Virha_CV.pdf" className="block px-4 py-3 text-white hover:bg-[#333333] transition-colors text-sm flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
