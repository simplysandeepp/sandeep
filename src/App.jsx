import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/ui/LoadingScreen';
import NewWebsiteNotice from './components/ui/NewWebsiteNotice';

// import Hero from './components/sections/Hero';
// import SocialTitans from './components/sections/SocialTitans';
// import SkillsHashira from './components/sections/SkillsHashira';
// import ExperienceDeathNote from './components/sections/ExperienceDeathNote';
// import EventsBlog from './components/sections/EventsBlog';
// import ProjectsShowcase from './components/sections/ProjectsShowcase';
// import Contact from './components/sections/Contact';
// import Footer from './components/sections/Footer';
// import PinterestSection from './components/sections/PinterestSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for resources
    const timer = setTimeout(() => setLoading(false), 1000);

    // Prank: Replace copied text
    const handleCopy = (e) => {
      e.preventDefault();
      e.clipboardData.setData('text/plain', "Lol, What did you get by copying? 😂😂");
    };

    document.addEventListener('copy', handleCopy);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-red-500 selection:text-white relative">
      {/* Premium Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-900 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-gray-800 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.05) 25%, rgba(220, 38, 38, 0.05) 26%, transparent 27%, transparent 74%, rgba(220, 38, 38, 0.05) 75%, rgba(220, 38, 38, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(220, 38, 38, 0.05) 25%, rgba(220, 38, 38, 0.05) 26%, transparent 27%, transparent 74%, rgba(220, 38, 38, 0.05) 75%, rgba(220, 38, 38, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Premium Content Container - All in One Frame */}
        <div className="flex items-center justify-center min-h-screen py-12">
          <div className="max-w-2xl w-full mx-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-8 md:p-12"
            >
              {/* Premium Logo/Text */}
              <div className="text-center mb-12">
                <h1 className="text-6xl md:text-7xl font-black text-white drop-shadow-lg mb-4">
                  SANDEEP
                </h1>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
                <p className="text-lg text-gray-300 tracking-widest uppercase">
                  Full Stack Developer | AI Enthusiast
                </p>
              </div>

              {/* Premium Stats */}
              <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
                <div className="bg-black bg-opacity-40 p-4 rounded-lg border border-red-500 border-opacity-30">
                  <p className="text-2xl font-bold text-red-400">50+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Projects</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-lg border border-red-500 border-opacity-30">
                  <p className="text-2xl font-bold text-red-400">5+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Years</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-lg border border-red-500 border-opacity-30">
                  <p className="text-2xl font-bold text-red-400">100%</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Dedicated</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 my-8"></div>

              {/* Important Notice */}
              {!loading && <NewWebsiteNotice />}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Loading Screen Overlay */}
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
