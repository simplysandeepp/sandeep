import React from 'react';
import { motion } from 'framer-motion';

function NewWebsiteNotice() {
  const handleVisitNewSite = () => {
    window.location.href = 'https://www.sandeepp.in/';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-lg">
      {/* Premium Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={handleVisitNewSite}
        className="relative max-w-sm w-full mx-4 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 25, 0.95) 0%, rgba(30, 15, 20, 0.98) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(220, 38, 38, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Premium Shine Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent opacity-60"></div>

        {/* Header */}
        <div className="relative px-5 py-4 bg-gradient-to-r from-red-700 via-red-600 to-red-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white opacity-10 via-transparent to-transparent"></div>
          <div className="relative">
            <h2 className="text-2xl font-black text-white drop-shadow-lg">
              ✨ Notice
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-7 text-center space-y-5">
          <div>
            <p className="text-sm text-red-300 font-semibold mb-3 uppercase tracking-widest">
              🚀 Portfolio Update
            </p>
            <p className="text-white text-base leading-relaxed font-light">
              Developer portfolio is now shifted to new domain !!
            </p>
          </div>

          {/* Domain Box - Premium Glossy Style */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative px-5 py-4 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(190, 24, 24, 0.15) 100%)',
              border: '1.5px solid rgba(220, 38, 38, 0.6)',
              backdropFilter: 'blur(10px)',
              boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 4px 15px rgba(220, 38, 38, 0.15)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white opacity-5 via-transparent to-transparent"></div>
            <p className="relative text-lg font-bold text-white tracking-wider">sandeepp.in</p>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 px-6 pb-7">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={handleVisitNewSite}
            className="w-full px-4 py-3 rounded-lg font-bold text-white transition duration-300 text-base"
            style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              boxShadow: '0 8px 20px rgba(220, 38, 38, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Visit New Website ✨
          </motion.button>
        </div>

        {/* Bottom Shine */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-40"></div>
      </motion.div>
    </div>
  );
}

export default NewWebsiteNotice;
