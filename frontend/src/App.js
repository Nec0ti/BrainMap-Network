import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


const dataAnalysisImage = (
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="100%" height="100%" fill="#483A58" rx="15" />
    <g fill="#fff">
      <rect x="40" y="100" width="20" height="50" />
      <rect x="90" y="70" width="20" height="80" />
      <rect x="140" y="40" width="20" height="110" />
    </g>
  </svg>
);

const feedbackImage = (
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="100%" height="100%" fill="#483A58" rx="15" />
    <g fill="#fff">
      <rect x="30" y="50" width="140" height="20" />
      <rect x="30" y="80" width="100" height="20" />
      <rect x="30" y="110" width="110" height="20" />
      <circle cx="170" cy="170" r="10" fill="#63A088" />
    </g>
  </svg>
);

const collaborationImage = (
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="100%" height="100%" fill="#483A58" rx="15" />
    <g fill="#fff">
      <circle cx="60" cy="80" r="15" />
      <rect x="50" y="95" width="20" height="40" rx="10" />
      <circle cx="140" cy="80" r="15" />
      <rect x="130" y="95" width="20" height="40" rx="10" />
      <line x1="70" y1="105" x2="130" y2="105" stroke="#63A088" strokeWidth="5" strokeLinecap="round" />
    </g>
  </svg>
);

const userManagementImage = (
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="100%" height="100%" fill="#56638A" rx="15" />
    <g fill="#fff">
      <circle cx="100" cy="60" r="20" />
      <rect x="80" y="90" width="40" height="50" rx="10" />
      <g transform="translate(150,40)">
        <circle cx="0" cy="0" r="15" fill="#53DD6C" />
        <g fill="#fff">
          <path d="M0,-15 L5,-12 L5,-8 L0,-5 L-5,-8 L-5,-12 Z" />
          <path d="M12,-5 L15,0 L12,5 L8,5 L5,0 L8,-5 Z" />
          <path d="M0,15 L-5,12 L-5,8 L0,5 L5,8 L5,12 Z" />
          <path d="M-12,-5 L-15,0 L-12,5 L-8,5 L-5,0 L-8,-5 Z" />
          <circle cx="0" cy="0" r="5" fill="#56638A" />
        </g>
      </g>
      <g transform="translate(50,40)">
        <circle cx="0" cy="0" r="15" fill="#53DD6C" />
        <g fill="#fff">
          <path d="M0,-15 L5,-12 L5,-8 L0,-5 L-5,-8 L-5,-12 Z" />
          <path d="M12,-5 L15,0 L12,5 L8,5 L5,0 L8,-5 Z" />
          <path d="M0,15 L-5,12 L-5,8 L0,5 L5,8 L5,12 Z" />
          <path d="M-12,-5 L-15,0 L-12,5 L-8,5 L-5,0 L-8,-5 Z" />
          <circle cx="0" cy="0" r="5" fill="#56638A" />
        </g>
      </g>
    </g>
  </svg>
);

const features = [
  {
    title: 'User Management',
    content: 'Manage users and their roles efficiently.',
    image: userManagementImage,
  },
  {
    title: 'Feedback',
    content: 'Collect and analyze user feedback for improvements.',
    image: feedbackImage,
  },
  {
    title: 'Data Analysis',
    content: 'Visualize and interpret data to drive decisions.',
    image: dataAnalysisImage,
  },
  {
    title: 'Collaboration',
    content: 'Work together with your team in real-time.',
    image: collaborationImage,
  },
];

const App = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Parallax
          blur={10}
          bgImage={require('./image.jpg')}
          bgImageAlt="sun"
          strength={500}
        >
          <div className="parallax-content">
            <h1>Welcome to BrainMap Network</h1>
          </div>
        </Parallax>
        <div className="features-section">
          <h2>Explore Our Features</h2>
          <div className="feature-container">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${activeCard === index ? 'active' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="feature-image">{feature.image}</div>
                <h3>{feature.title}</h3>
                <div className="feature-details" style={{ display: activeCard === index ? 'block' : 'none' }}>
                  {feature.content}
                </div>
              </div>
            ))}
          </div>
          <div className="team-section">
            <h2>About the Team</h2>
            <div className="feature-container">
              <div className="feature-card">
                <h3>Halil Necati Gulsen</h3>
                <p>Everything Man</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
