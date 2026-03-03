import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

function NewWebsiteNotice() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleVisitNewSite = () => {
    window.location.href = 'https://www.sandeepp.in/';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-red-500 border-opacity-30"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">📢 Important Notice</h2>
            <button
              onClick={handleClose}
              className="text-white hover:bg-red-700 p-1 rounded-full transition"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 text-center space-y-6">
          <div>
            <p className="text-lg text-gray-300 mb-2">
              Dear Visitor,
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am pleased to inform you that a new and improved portfolio website has been created 
              by the developer with a custom domain. This site now features enhanced user experience, 
              improved performance, and a modern design tailored to showcase projects and expertise more effectively.
            </p>
          </div>

          <div className="bg-gray-700 bg-opacity-50 px-4 py-3 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-red-400">New Website:</span> sandeepp.in
            </p>
          </div>

          <p className="text-sm text-gray-500">
            We recommend visiting the new website for the latest content and features.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition duration-200"
          >
            Dismiss
          </button>
          <button
            onClick={handleVisitNewSite}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-lg font-semibold transition duration-200 shadow-lg"
          >
            Visit New Website →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NewWebsiteNotice;
