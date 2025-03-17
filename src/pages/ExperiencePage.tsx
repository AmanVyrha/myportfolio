import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Briefcase, Building, Calendar, Clock, GraduationCap, 
  CircleCheck, MapPin, Award, Clipboard 
} from 'lucide-react';

const experienceData = [
  {
    id: 'exp1',
    title: 'Data Analyst',
    company: 'FDI Technology',
    location: 'Dublin, Ireland',
    period: 'Jan 2023 - Present',
    description: [
      'Analyze complex datasets to identify trends and insights that inform business strategy',
      'Develop automated reporting dashboards using Power BI for executive team',
      'Build predictive models to forecast business metrics with 90% accuracy',
      'Collaborate with cross-functional teams to implement data-driven solutions'
    ],
    icon: <Briefcase className="text-netflix-red" size={24} />,
    type: 'work'
  },
  {
    id: 'exp2',
    title: 'MS in Data Analytics',
    company: 'Dublin Business School',
    location: 'Dublin, Ireland',
    period: 'Sept 2021 - Dec 2022',
    description: [
      'Specialized in advanced statistical analysis and machine learning techniques',
      'Completed thesis on "Predictive Modeling for Customer Retention in SaaS Companies"',
      'Achieved First Class Honours with 3.9 GPA',
      'Selected for research assistant position in Data Science Lab'
    ],
    icon: <GraduationCap className="text-netflix-red" size={24} />,
    type: 'education'
  },
  {
    id: 'exp3',
    title: 'Data Analysis Intern',
    company: 'Tech Innovators Ltd',
    location: 'Remote',
    period: 'Jun 2021 - Sept 2021',
    description: [
      'Processed and analyzed customer behavior data to improve conversion rates',
      'Created weekly reports and visualizations for marketing team',
      'Implemented A/B testing methodology to optimize website UX',
      'Assisted in building ETL pipelines for data warehouse'
    ],
    icon: <Briefcase className="text-netflix-red" size={24} />,
    type: 'work'
  },
  {
    id: 'exp4',
    title: "Bachelor's in Computer Science",
    company: 'University of Delhi',
    location: 'Delhi, India',
    period: 'Aug 2017 - May 2021',
    description: [
      'Graduated with distinction (85% aggregate)',
      'Specialized in Database Management Systems and Data Structures',
      'Led 3 software development projects as team leader',
      'Won 2nd place in annual hackathon for education technology solution'
    ],
    icon: <GraduationCap className="text-netflix-red" size={24} />,
    type: 'education'
  }
];

const certifications = [
  {
    id: 'cert1',
    title: 'Microsoft Certified: Data Analyst Associate',
    organization: 'Microsoft',
    date: 'Dec 2022',
    icon: <Award className="text-netflix-red" size={20} />
  },
  {
    id: 'cert2',
    title: 'TensorFlow Developer Certificate',
    organization: 'Google',
    date: 'Oct 2022',
    icon: <Award className="text-netflix-red" size={20} />
  },
  {
    id: 'cert3',
    title: 'AWS Certified Data Analytics - Specialty',
    organization: 'Amazon Web Services',
    date: 'Aug 2022',
    icon: <Award className="text-netflix-red" size={20} />
  }
];

const ExperiencePage = () => {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    document.title = "Experience | Aman Vyrha";
  }, []);
  
  const filteredExperience = filter === 'all' 
    ? experienceData 
    : experienceData.filter(item => item.type === filter);

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar profileName="Aman Vyrha" />
      
      <div className="relative pt-28 pb-10">
        <div className="netflix-container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h1 className="text-4xl text-netflix-red font-bold mb-4 md:mb-0">
              Experience & Education
            </h1>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded text-white ${filter === 'all' ? 'bg-netflix-red' : 'bg-netflix-darkgray'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('work')}
                className={`px-4 py-2 rounded text-white ${filter === 'work' ? 'bg-netflix-red' : 'bg-netflix-darkgray'}`}
              >
                Work
              </button>
              <button 
                onClick={() => setFilter('education')}
                className={`px-4 py-2 rounded text-white ${filter === 'education' ? 'bg-netflix-red' : 'bg-netflix-darkgray'}`}
              >
                Education
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-3.5 top-0 h-full w-0.5 bg-netflix-gray/30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {filteredExperience.map((item) => (
                  <div key={item.id} className="relative pl-12">
                    {/* Icon */}
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-netflix-black border-2 border-netflix-red">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="group rounded-lg bg-netflix-darkgray p-6 transition-transform duration-200 hover:scale-[1.01]">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center text-sm text-white/70">
                        <div className="mr-4 flex items-center">
                          <Building size={16} className="mr-1 shrink-0" />
                          <span>{item.company}</span>
                        </div>
                        <div className="mr-4 flex items-center">
                          <MapPin size={16} className="mr-1 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1 shrink-0" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <ul className="space-y-2">
                          {item.description.map((desc, index) => (
                            <li key={index} className="flex">
                              <CircleCheck size={18} className="text-netflix-red mr-2 shrink-0 mt-0.5" />
                              <span className="text-white/80">{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-12">
              <h2 className="text-2xl text-white font-bold mb-4">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="bg-netflix-darkgray p-4 rounded-lg flex items-start"
                  >
                    {cert.icon}
                    <div className="ml-3">
                      <h4 className="text-white font-medium">{cert.title}</h4>
                      <div className="text-white/70 text-sm mt-1">
                        <p>{cert.organization}</p>
                        <p className="flex items-center mt-1">
                          <Calendar size={14} className="mr-1" />
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
