import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'PRIME',
      description: 'Diploma Project: Implemented PRIME, a cross-platform desktop voice assistant using Python libraries to enhance productivity.',
      technologies: ['Python', 'Pyttsx3', 'Speech Recognition', 'PyQt5', 'PyQt Designer', 'PyInstaller', 'Firebase'],
      features: [
        'Voice-activated commands with Pyttsx3 and Speech Recognition',
        'Intuitive PyQt5 GUI',
        'Extensible plugin architecture',
        'Cross-platform compatibility',
        'PyInstaller deployment',
        'Firebase integration for security',
      ],
    },
    {
      title: 'SmartAdmission: AI-Powered Screening System',
      description: 'B.Tech-TY Project: Developed an AI-driven Online Admission Screening System using Data Science and ML to streamline admissions.',
      technologies: ['React', 'MongoDB', 'API (NodeJS, Express)', 'Python', 'Pandas'],
      features: [
        'Full-stack development with ReactJS frontend and NodeJS/Express backend',
        'Utilizing MongoDB for storage',
        'Efficient admission screening: Analytical dashboard',
        'Python/Pandas integration',
        'Task automation',
      ],
    },
    {
      title: 'Memories',
      description: 'Launched and managed ’Memories,’ a vibrant social media platform for sharing life events.',
      technologies: ['MERN', 'React', 'Tailwind CSS', 'API (Node, Express)', 'Redux', 'MongoDB'],
      features: [
        'Seamless User Experience with React and Redux',
        'Efficient Data Management with Node, Express, MongoDB',
        'Community Engagement: Fostered a vibrant online community for sharing significant moments',
      ],
    },
  ];

  return (
    <div className="mt-5 mb-5 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold mb-3">Projects</h2>
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={index} className="mb-5">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              <ul>
                {project.features.map((feature, index) => {
                  return <li key={index}>{feature}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;