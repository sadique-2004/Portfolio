import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faHackerrank,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faCopyright, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-b from-dark-900 to-dark-950 text-white py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Section: Support */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Support My Work
            </h3>
            <p className="text-dark-300 max-w-md">
              If you like my work and want to support my journey in creating more awesome projects, consider buying me a coffee!
            </p>
            <a 
              href="https://www.buymeacoffee.com/mdsadique0a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="https://cdn.buymeacoffee.com/buttons/v2/default-white.png" 
                alt="Buy Me A Coffee" 
                className="h-12"
              />
            </a>
          </div>

          {/* Right Section: Connect */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-dark-300 max-w-md">
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always excited to connect with fellow developers.
            </p>
            <div className="flex gap-6 justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-800/50 backdrop-blur-sm
                               border border-dark-700 transform transition-all duration-300 
                               group-hover:scale-110 group-hover:border-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                    <FontAwesomeIcon 
                      icon={link.icon} 
                      className="h-5 w-5 text-dark-300 group-hover:text-primary-400 transition-colors duration-300" 
                    />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                 text-sm text-dark-400 whitespace-nowrap">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-dark-400 flex items-center justify-center space-x-2 text-sm">
            <span>Copyright</span>
            <FontAwesomeIcon icon={faCopyright} className="h-3.5 w-3.5" />
            <span>{new Date().getFullYear()} Md_Sadique. All rights reserved.</span>
          </p>
        </div>

        {/* Back to Top Button */}
        <div className={`fixed bottom-6 right-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              group
              relative
              bg-dark-900
              hover:bg-dark-800
              text-dark-400
              hover:text-white
              p-2.5
              rounded-lg
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              focus:outline-none
              focus:ring-2
              focus:ring-dark-600
              focus:ring-offset-2
              active:scale-95
            `}
            aria-label="Back to top"
          >
            <FontAwesomeIcon 
              icon={faArrowUp} 
              className={`
                h-4 w-4
                transform
                transition-transform
                duration-300
                ${isHovered ? '-translate-y-0.5' : ''}
              `}
            />
            <span className={`
              absolute
              whitespace-nowrap
              right-full
              mr-2
              top-1/2
              -translate-y-1/2
              bg-dark-900
              text-dark-400
              px-2
              py-1
              text-xs
              rounded
              transition-opacity
              duration-200
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}>
              Back to top
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
