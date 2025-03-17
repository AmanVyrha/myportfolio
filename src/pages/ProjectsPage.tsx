import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 'proj1',
    title: 'ML Prediction Engine - Customer Churn Prediction Model',
    image: 'public/assets/content/projects/ml-prediction-engine.gif',
    videoSrc: 'public/assets/content/projects/ml-prediction-engine.gif',
    tags: ['Python', 'Scikit-learn', 'TensorFlow'],
    description: 'Developed a machine learning model to predict customer churn with 85% accuracy. Built data pipelines for preprocessing and implemented ensemble learning techniques to improve prediction performance.',
    demoUrl: '#'
  },
  {
    id: 'proj2',
    title: 'Data Visualization Dashboard - Interactive Sales Analytics',
    image: 'public/assets/content/projects/data-visualisaiton.gif',
    videoSrc: 'public/assets/content/projects/data-visualisaiton.gif',
    tags: ['Power BI', 'DAX', 'SQL'],
    description: 'Created an interactive data visualization dashboard for sales analytics, allowing stakeholders to filter data by region, product, and time period. Implemented advanced DAX measures for calculating KPIs.',
    demoUrl: '#'
  },
  {
    id: 'proj3',
    title: 'Twitter Trend Analysis - Real-Time Streamlit Dashboard',
    image: 'public/assets/content/projects/twitter-trend-analysis.gif',
    videoSrc: 'public/assets/content/projects/twitter-trend-analysis.gif',
    tags: ['Python', 'Streamlit', 'Twitter API'],
    description: 'Built a real-time dashboard to analyze Twitter trends and sentiment using the Twitter API. Implemented NLP algorithms to categorize tweets and visualize sentiment changes over time.',
    demoUrl: '#'
  },
  {
    id: 'proj4',
    title: 'Customer Segmentation Analysis',
    image: 'public/assets/content/social-activity/instagram-activity.gif',
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
