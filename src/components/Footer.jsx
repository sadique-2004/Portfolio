import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faHackerrank,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mdsadique5',
      icon: faLinkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sadique-2004',
      icon: faGithub,
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/md_sadique',
      icon: faHackerrank,
    },
    // {
    //   name: 'CodePen',
    //   url: 'https://codepen.io/your-username',
    //   icon: faCodepen,
    // },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/Md_Sadique2004',
      icon: faLink,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* About Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-400">
              A passionate Full Stack Developer specializing in MERN stack development.
              Building innovative web solutions and bringing ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="home" className="text-gray-400 hover:text-blue-500 transition-colors">Home</a>
              <a href="about" className="text-gray-400 hover:text-blue-500 transition-colors">About</a>
              <a href="projects" className="text-gray-400 hover:text-blue-500 transition-colors">Projects</a>
              <a href="contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  title={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <FontAwesomeIcon icon={faCopyright} className="h-4 w-4" />
            <span>{new Date().getFullYear()} Md_Sadique. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
