import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 'proj1',
    title: 'Twitter Trend Analysis',
    image: '/assets/content/projects/twitter-trend-analysis.gif',
    videoSrc: '/assets/content/projects/twitter-trend-analysis.gif',
    tags: ['Python', 'Data Analysis', 'API'],
    description: 'Developed a real-time Twitter trend analysis tool that tracks and visualizes trending topics across different regions. Implemented sentiment analysis to gauge public opinion on trending topics.',
    demoUrl: '#'
  },
  {
    id: 'proj2',
    title: 'ML Prediction Engine',
    image: '/assets/content/projects/ml-prediction-engine.gif',
    videoSrc: '/assets/content/projects/ml-prediction-engine.gif',
    tags: ['Machine Learning', 'Python', 'Scikit-learn'],
    description: 'Built a machine learning prediction engine that processes historical data to forecast future trends. Implemented multiple algorithms and automated model selection based on performance metrics.',
    demoUrl: '#'
  },
  {
    id: 'proj3',
    title: 'Data Visualization Dashboard',
    image: '/assets/content/projects/data-visualisaiton.gif',
    videoSrc: '/assets/content/projects/data-visualisaiton.gif',
    tags: ['Power BI', 'Tableau', 'SQL'],
    description: 'Created interactive dashboards for business stakeholders to monitor key performance indicators. Implemented real-time data updates and custom visualizations for better decision-making.',
    demoUrl: '#'
  },
  {
    id: 'proj4',
    title: 'Customer Segmentation Analysis',
    image: '/assets/content/social-activity/instagram-activity.gif',
    videoSrc: '/assets/content/social-activity/instagram-activity.gif',
    tags: ['Python', 'Clustering', 'K-means'],
    description: 'Performed customer segmentation analysis using K-means clustering to identify distinct customer groups. Created targeted marketing strategies based on segment characteristics.',
    demoUrl: '#'
  }
];

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects | Aman Vyrha";
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar profileName="Aman Vyrha" />
      
      <div className="relative pt-28 pb-10">
        <div className="netflix-container">
          <h1 className="text-4xl text-netflix-red font-bold mb-8">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-[1.02]">
                  <div 
                    className="relative h-64 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/70 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 bg-netflix-red/80 text-white rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-white/80 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex space-x-3">
                        {project.videoSrc && (
                          <button className="flex items-center justify-center bg-white hover:bg-gray-200 text-netflix-black py-1 px-3 rounded text-sm">
                            <Play className="mr-1" size={14} />
                            <span>Demo</span>
                          </button>
                        )}
                        
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-netflix-gray/80 hover:bg-netflix-gray/60 text-white py-1 px-3 rounded text-sm"
                        >
                          <ExternalLink className="mr-1" size={14} />
                          <span>Visit</span>
                        </a>
                        
                        <a 
                          href="#" 
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center bg-netflix-gray/80 hover:bg-netflix-gray/60 text-white py-1 px-3 rounded text-sm"
                        >
                          <Github className="mr-1" size={14} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
