import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Code, Database, LineChart, Server, Settings, Terminal } from 'lucide-react';

const skillsData = [
  {
    id: 'skill1',
    title: 'Programming Languages',
    icon: <Code size={24} />,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'R', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'HTML/CSS', level: 75 },
      { name: 'JavaScript', level: 70 }
    ],
    color: '#E50914'
  },
  {
    id: 'skill2',
    title: 'Data Analysis & Modeling',
    icon: <Database size={24} />,
    skills: [
      { name: 'Pandas', level: 95 },
      { name: 'NumPy', level: 90 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 }
    ],
    color: '#F5F5F1'
  },
  {
    id: 'skill3',
    title: 'Data Visualization',
    icon: <LineChart size={24} />,
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 85 },
      { name: 'Streamlit', level: 80 },
      { name: 'Matplotlib', level: 90 },
      { name: 'Seaborn', level: 85 }
    ],
    color: '#94B92D'
  },
  {
    id: 'skill4',
    title: 'Machine Learning',
    icon: <Settings size={24} />,
    skills: [
      { name: 'Regression', level: 90 },
      { name: 'Classification', level: 95 },
      { name: 'Clustering', level: 85 },
      { name: 'NLP', level: 80 },
      { name: 'Deep Learning', level: 75 }
    ],
    color: '#2A9D8F'
  },
  {
    id: 'skill5',
    title: 'Tools',
    icon: <Terminal size={24} />,
    skills: [
      { name: 'Jupyter Notebooks', level: 95 },
      { name: 'Excel', level: 90 },
      { name: 'GitHub', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 }
    ],
    color: '#E9C46A'
  },
  {
    id: 'skill6',
    title: 'Databases',
    icon: <Server size={24} />,
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQLite', level: 90 },
      { name: 'Azure SQL', level: 75 }
    ],
    color: '#F4A261'
  }
];

const SkillsPage = () => {
  useEffect(() => {
    document.title = "Skills | Aman Vyrha";
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar profileName="Aman Vyrha" />
      
      <div className="relative pt-28 pb-10">
        <div className="netflix-container">
          <h1 className="text-4xl text-netflix-red font-bold mb-8">Technical Skills</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skillCategory) => (
              <div 
                key={skillCategory.id} 
                className="bg-netflix-darkgray rounded-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-netflix-red mr-3">
                      {skillCategory.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{skillCategory.title}</h3>
                  </div>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={skillCategory.skills}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" horizontal={false} />
                        <XAxis type="number" domain={[0, 100]} stroke="#999" />
                        <YAxis dataKey="name" type="category" stroke="#999" />
                        <Tooltip 
                          contentStyle={{ background: '#222', border: 'none', borderRadius: '4px' }}
                          formatter={(value) => [`${value}%`, 'Proficiency']}
                        />
                        <Bar 
                          dataKey="level" 
                          fill={skillCategory.color} 
                          radius={[0, 4, 4, 0]}
                          barSize={20}
                        />
                      </BarChart>
                    </ResponsiveContainer>
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

export default SkillsPage;
