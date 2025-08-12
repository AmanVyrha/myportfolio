import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ProfileSelectionScreen from './components/ProfileSelectionScreen';
import Portfolio from './components/Portfolio';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'loading' | 'profiles' | 'portfolio'>('loading');
  const [selectedProfile, setSelectedProfile] = useState<string>('');

  // Loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('profiles');
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Profile data
  const profiles = [
    {
      id: 'main',
      name: 'Aman Vyrha',
      description: 'Portfolio and Resume',
      color: 'from-green-400 to-green-600',
      imageSrc: '' // Can add profile image here
    },
    {
      id: 'projects',
      name: 'Projects',
      description: 'Tech and Creative Work',
      color: 'from-purple-400 to-purple-600',
      imageSrc: ''
    },
    {
      id: 'skills',
      name: 'Skills',
      description: 'Technical Skills & Expertise',
      color: 'from-pink-400 to-pink-600',
      imageSrc: ''
    },
    {
      id: 'contact',
      name: 'Contact',
      description: 'Get In Touch',
      color: 'from-blue-400 to-blue-600',
      imageSrc: ''
    }
  ];

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Data Analysis', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Power BI', level: 85 },
    { name: 'SQL', level: 75 },
    { name: 'TensorFlow', level: 70 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 }
  ];

  const projects = [
    {
      title: 'ML_PREDICTION_ENGINE',
      description: 'Customer churn prediction model using advanced machine learning algorithms',
      tech: ['Python', 'Scikit-learn', 'TensorFlow'],
      link: 'https://github.com/amanvirha/ml-prediction-engine',
      featured: true
    },
    {
      title: 'DATA_VISUALIZATION',
      description: 'Interactive dashboard for sales analytics',
      tech: ['Power BI', 'SQL', 'Data Analysis'],
      link: 'https://github.com/amanvirha/data-visualization-dashboard',
      featured: true
    },
    {
      title: 'Twitter Trend Analysis',
      description: 'Twitter/X trend analysis with real time Streamlit dashboard',
      tech: ['Python', 'Streamlit', 'Twitter API'],
      link: 'https://github.com/amanvirha/twitter-trend-analysis',
      featured: false
    }
  ];

  const experience = [
    {
      title: 'Sales Assistant (Part-Time)',
      company: 'Circle K, Dublin, Ireland',
      period: '12/2024 - Present',
      description: 'Assisted customers, including older adults, to download, install, and register the Circle K mobile app, guiding them through redeeming rewards and fuel discounts (~10–20 customers weekly).\n\nSupported colleagues during high-traffic periods to maintain service levels.'
    },
    {
      title: 'AI & Data Intern',
      company: 'Broz Media, India',
      period: '04/2024 - 07/2024',
      description: 'Designed and tested generative AI solutions for automating influencer brief creation and social media content ideation.\n\nConducted sentiment analysis on campaign data using Python and R to assess audience engagement and brand sentiment.\n\nBuilt Tableau dashboards to visualise campaign performance metrics, including engagement rate, CTR, and ROI for clients.\n\nCollaborated with cross-functional teams to implement data-driven targeting strategies, improving campaign reach by ~12%.\n\nCleaned, structured, and analysed UGC datasets to identify high-performing content trends for brand clients.'
    },
    {
      title: 'Operations & Data Analytics Intern',
      company: 'Delhivery Pvt, India',
      period: '11/2023 - 03/2024',
      description: 'Analysed logistics datasets using SQL, Python, and R to identify route inefficiencies and recommend process optimisations.\n\nBuilt Excel and Tableau dashboards to visualise delivery performance, improving on-time delivery by ~8%.\n\nPartnered with IT on deploying automated tracking systems and preparing onboarding documentation.'
    }
  ];

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
    setTimeout(() => {
      setCurrentScreen('portfolio');
    }, 800);
  };
  
  // Loading Screen
  if (currentScreen === 'loading') {
    return <LoadingScreen />;
  }

  // Profile Selection Screen
  if (currentScreen === 'profiles') {
    return (
      <ProfileSelectionScreen 
        profiles={profiles} 
        onProfileSelect={handleProfileSelect} 
      />
    );
  }

  // Main Portfolio
  return (
    <Portfolio 
      onBackToProfiles={() => setCurrentScreen('profiles')}
      selectedProfile={selectedProfile}
      skills={skills}
      projects={projects}
      experience={experience}
    />
  );
}

export default App;