import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DeveloperHero from '../components/DeveloperHero';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

// Data Analyst projects data
const projectsData = [
  {
    id: 'proj1',
    title: 'ML Prediction Engine - Customer Churn Prediction Model',
    image: 'public/assets/content/projects/ml-prediction-engine.gif',
    videoSrc: 'public/assets/content/projects/ml-prediction-engine.gif',
    tags: ['Python', 'Scikit-learn', 'TensorFlow']
  },
  {
    id: 'proj2',
    title: 'Data Visualization Dashboard - Interactive Sales Analytics',
    image: 'public/assets/content/projects/data-visualisaiton.gif',
    videoSrc: 'public/assets/content/projects/data-visualisaiton.gif',
    tags: ['Power BI']
  },
  {
    id: 'proj3',
    title: 'Twitter Trend Analysis - Real-Time Streamlit Dashboard',
    image: 'public/assets/content/projects/twitter-trend-analysis.gif',
    videoSrc: 'public/assets/content/projects/twitter-trend-analysis.gif',
    tags: ['Python', 'Streamlit', 'Twitter API']
  }
];

const skillsData = [
  {
    id: 'skill1',
    title: 'Programming Languages',
    image: 'public/assets/content/Core Competencies/python.gif',
    tags: ['Python', 'R', 'SQL']
  },
  {
    id: 'skill2',
    title: 'Data Analysis & Modeling',
    image: 'public/assets/content/Core Competencies/data-visualisaiton.gif',
    tags: ['Pandas', 'NumPy', 'Scikit-learn']
  },
  {
    id: 'skill3',
    title: 'Data Visualization',
    image: 'public/assets/content/experience/data-analyst.gif',
    tags: ['Power BI', 'Tableau', 'Streamlit']
  },
  {
    id: 'skill4',
    title: 'Machine Learning',
    image: 'public/assets/content/projects/ml-prediction-engine.gif',
    tags: ['Regression', 'Classification', 'Clustering']
  },
  {
    id: 'skill5',
    title: 'Tools',
    image: 'public/assets/content/Core Competencies/jupyter.gif',
    tags: ['Jupyter Notebooks', 'Excel', 'GitHub']
  }
];

const experienceData = [
  {
    id: 'exp1',
    title: 'Data Analyst',
    image: '/assets/content/experience/data-analyst.gif',
    tags: ['Current Position']
  },
  {
    id: 'exp2',
    title: 'MS in Data Analytics - Dublin Business School',
    image: 'public/assets/content/experience/master-education.gif',
    tags: ['Dublin/IRELAND']
  },
  {
    id: 'exp3',
    title: "Bachelor's in Science in Computer Science - University of Delhi",
    image: 'public/assets/content/experience/bachelor-education.gif',
    tags: ['Delhi/INDIA']
  }
];

const recommendationsData = [
  {
    id: 'rec1',
    title: 'Statistical Analysis',
    image: 'public/assets/content/recommendations/statistics-analyisis.gif',
    tags: ['Data Cleaning', 'Predictive Modeling']
  },
  {
    id: 'rec2',
    title: 'Data Transformation',
    image: 'public/assets/content/recommendations/data-transformation.gif',
    tags: ['Insights', 'Visualization']
  },
  {
    id: 'rec3',
    title: 'Machine Learning Models',
    image: 'public/assets/content/recommendations/machine-leanring-models.gif',
    tags: ['Feature Selection', 'Model Performance']
  },
  {
    id: 'rec4',
    title: 'Business Intelligence',
    image: 'public/assets/content/recommendations/business-intelligence.gif',
    tags: ['Dashboards', 'Decision Making']
  }
];

// Social media activity for stalker profile
const socialActivityData = [
  {
    id: 'social1',
    title: 'Recent GitHub Commits',
    image: 'public/assets/content/social-activity/github-activity.gif',
    tags: ['Today', '5 commits']
  },
  {
    id: 'social2',
    title: 'LinkedIn Activity',
    image: 'public/assets/content/social-activity/linkedin-activity.gif',
    tags: ['New connection', '2 posts']
  },
  {
    id: 'social3',
    title: 'Twitter Updates',
    image: 'public/assets/content/social-activity/twitter-activity.gif',
    tags: ['3 tweets', '15 likes']
  },
  {
    id: 'social4',
    title: 'Instagram Photos',
    image: 'public/assets/content/social-activity/instagram-activity.gif',
    tags: ['2 new posts', 'Dublin, Ireland']
  }
];

// Adventure content for adventurer profile
const adventureData = [
  {
    id: 'adv1',
    title: 'Exploring Dublin',
    image: 'public/assets/content/experience/master-education.gif',
    tags: ['Ireland', 'Current']
  },
  {
    id: 'adv2',
    title: 'India Travels',
    image: 'public/assets/content/experience/bachelor-education.gif',
    tags: ['Delhi', 'Home']
  },
  {
    id: 'adv3',
    title: 'Data Science Conferences',
    image: 'public/assets/content/experience/conference.gif',
    tags: ['Global', 'Learning']
  },
  {
    id: 'adv4',
    title: 'Tech Meetups',
    image: 'public/assets/content/experience/tech.gif',
    tags: ['Networking', 'Community']
  }
];

const HomePage = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const isDevProfile = path === '/developer';
  const isRecruiterProfile = path === '/recruiter';
  const isStalkerProfile = path === '/personal';
  const isAdventurerProfile = path === '/portfolio' || path === '/amanvyrha';
  
  useEffect(() => {
    if (isDevProfile) {
      document.title = "Aman Vyrha | Developer";
    } else if (isRecruiterProfile) {
      document.title = "Aman Vyrha | For Recruiters";
    } else if (isStalkerProfile) {
      document.title = "Aman Vyrha | Personal Activity";
    } else if (isAdventurerProfile) {
      document.title = "Aman Vyrha | Adventures";
    } else {
      document.title = "Aman Vyrha | Portfolio";
    }
  }, [isDevProfile, isRecruiterProfile, isStalkerProfile, isAdventurerProfile]);

  const handleItemClick = (id: string) => {
    console.log(`Clicked item with id: ${id}`);
    // In a real app, this would navigate to a details page
    // navigate(`/project/${id}`);
  };

  const renderProfileContent = () => {
    if (isDevProfile) {
      return (
        <>
          <Hero 
            title="DATA ANALYST"
            description="Transforming data into actionable insights through statistical analysis, machine learning, and data visualization. Based in Dublin, Ireland."
            backgroundImage="/background-clips/developer.gif"
          />
          
          <div className="mt-6">
            <Carousel 
              title="Featured Projects"
              items={projectsData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Technical Skills"
              items={skillsData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Education & Experience"
              items={experienceData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Specializations"
              items={recommendationsData}
              onItemClick={handleItemClick}
            />
          </div>
        </>
      );
    } else if (isRecruiterProfile) {
      return (
        <>
          <Hero 
            title="Aman Vyrha - Data Analyst"
            description="Motivated and detail-oriented Data Analyst with a strong academic background in Computer Science and Data Analytics. Adept at transforming data into actionable insights through statistical analysis, machine learning, and data visualization."
            backgroundImage="/background-clips/recruit.gif"
          />
          
          <div className="mt-6">
            <Carousel 
              title="Professional Projects"
              items={projectsData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Core Competencies"
              items={skillsData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Education & Experience"
              items={experienceData}
              onItemClick={handleItemClick}
            />
          </div>
        </>
      );
    } else if (isStalkerProfile) {
      return (
        <>
          <Hero 
            title="Hey Stalker!"
            description="Looking for Aman Vyrha? Here's what he's been up to recently. Currently based in Dublin, Ireland."
            backgroundImage="/background-clips/stalker.gif"
          />
          
          <div className="mt-6">
            <Carousel 
              title="Recent Social Media Activity"
              items={socialActivityData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Latest Projects"
              items={projectsData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Professional Updates"
              items={experienceData}
              onItemClick={handleItemClick}
            />
          </div>
        </>
      );
    } else if (isAdventurerProfile) {
      return (
        <>
          <Hero 
            title="The Adventures of Aman Vyrha"
            description="From Delhi to Dublin - following the data science journey around the world."
            backgroundImage="/background-clips/adventure.gif"
          />
          
          <div className="mt-6">
            <Carousel 
              title="Life Locations"
              items={adventureData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Data Science Journey"
              items={[...skillsData].reverse()}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Project Adventures"
              items={projectsData}
              onItemClick={handleItemClick}
            />
          </div>
        </>
      );
    } else {
      // Default content
      return (
        <>
          <Hero 
            title="Aman Vyrha - Data Analyst"
            description="Motivated and detail-oriented Data Analyst with a strong academic background in Computer Science and Data Analytics. Located in Dublin, Ireland."
            backgroundImage="/background-clips/default.gif"
          />
          
          <div className="mt-6">
            <Carousel 
              title="Featured Projects"
              items={projectsData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Technical Skills"
              items={skillsData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Education & Experience"
              items={experienceData}
              onItemClick={handleItemClick}
            />
            
            <Carousel 
              title="Specializations"
              items={recommendationsData}
              onItemClick={handleItemClick}
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar profileName="Aman Vyrha" />
      
      {renderProfileContent()}
      
      <Footer />
    </div>
  );
};

export default HomePage;
