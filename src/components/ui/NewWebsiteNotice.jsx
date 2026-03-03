import React from 'react';

function NewWebsiteNotice() {
  return (
    <div className="text-center">
      {/* Important Notice */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-red-400 mb-4">⚠️ Important Notice</h3>
        <h4 className="text-xl text-gray-200 mb-4 leading-relaxed">
          New website is published! Please visit there.
        </h4>
        <p className="text-gray-400 text-sm">
          My portfolio has been moved to a new domain with enhanced features and better experience.
        </p>
      </div>

      {/* Link Section */}
      <div className="mt-8">
        <a
          href="https://www.sandeepp.in/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-lg hover:from-red-700 hover:to-red-600 hover:shadow-2xl transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-105"
        >
          Visit https://www.sandeepp.in/ →
        </a>
        <p className="mt-4 text-gray-500 text-sm">
          or copy this link: <a href="https://www.sandeepp.in/" className="text-red-400 font-mono hover:text-red-300 transition cursor-pointer underline">www.sandeepp.in</a>
        </p>
      </div>
    </div>
  );
}

export default NewWebsiteNotice;
