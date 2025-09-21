import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import profileImage from "../assets/images/profile.jpg";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const Location = useLocation();
  const navigate = useNavigate();

  const handleNavLink = (sectionId) => {
    if( Location.pathname !== "/"){
      navigate("/");
    }else{
      const section = document.getElementById(sectionId);
      if (section){
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
     // Close mobile menu if open
     setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Certifications", href: "certifications" },
    { name: "Contact", href: "contact", special: true,},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark-950/80 backdrop-blur-sm shadow-lg z-50">
      <motion.div
        className="h-[6.5px] bg-gradient-to-r from-primary-500 to-secondary-500 origin-[0%] fixed top-0 left-0 right-0 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a
              onClick={() => handleNavLink("home")}
              className="flex items-center space-x-2 font-bold whitespace-nowrap cursor-pointer"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-500 "
              />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent text-xl">
                Sadique.Dev
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end flex-1 ml-4">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  onClick={() => handleNavLink(item.href)}
                  className={`px-2 lg:px-3 py-2 text-sm lg:text-base cursor-pointer ${
                    item.special
                      ? "text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 rounded-full font-medium"
                      : "text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 ml-1"
              >
                {isDark ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {isDark ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                className={`block px-3 py-2 cursor-pointer ${
                  item.special
                    ? "text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-full font-medium "
                    : "text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
                onClick={() => {
                  handleNavLink(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
