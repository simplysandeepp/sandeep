import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/ui/LoadingScreen';
import NewWebsiteNotice from './components/ui/NewWebsiteNotice';

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
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NewWebsiteNotice />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
