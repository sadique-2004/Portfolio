import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/Loadingscreen'; // Import the LoadingScreen component
import './App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  const handleLoaded = () => {
    setIsLoading(false); // Set loading to false after the loading screen is done
  };

  if (isLoading) {
    return <LoadingScreen onLoaded={handleLoaded} />; // Show loading screen
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <HireMe />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;