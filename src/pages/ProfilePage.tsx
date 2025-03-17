import { useEffect } from 'react';
import ProfileSelection from '../components/ProfileSelection';

const profiles = [
  {
    id: '1',
    name: 'Recruiter',
    image: '/assets/profiles/recruiter.png',
    route: '/recruiter',
    gifSrc: '/background-clips/recruit.gif'
  },
  {
    id: '2',
    name: 'Developer',
    image: '/assets/profiles/developer.png',
    route: '/developer',
    gifSrc: '/background-clips/developer.gif'
  },
  {
    id: '3',
    name: 'Stalker',
    image: '/assets/profiles/stalker.png',
    gifSrc: '/background-clips/stalker.gif',
    route: '/personal'
  },
  {
    id: '4',
    name: 'Adventurer',
    image: '/assets/profiles/adventurer.png',
    route: '/portfolio',
    gifSrc: '/background-clips/adventure.gif'
  }
];

const ProfilePage = () => {
  useEffect(() => {
    document.title = "Who's Watching? | Aman Vyrha";
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black">
      <div className="w-full text-center pt-8">
        <h1 className="text-netflix-red font-netflix text-5xl mb-4">AMAN VYRHA</h1>
      </div>
      <ProfileSelection profiles={profiles} />
    </div>
  );
};

export default ProfilePage;
