import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pin } from 'lucide-react';

/**
 * Pinterest Hover Button Component
 * Shows a Pinterest save button when hovering over images
 */
const PinterestHoverButton = ({ children, imageUrl, description, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handlePinClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const currentUrl = window.location.href;
        const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(description)}`;

        window.open(pinterestUrl, '_blank', 'width=750,height=550');
    };

    return (
        <div
            className={`relative group ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-4 right-4 z-30"
                    >
                        <motion.button
                            onClick={handlePinClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-red-600/50 transition-all"
                            title="Save to Pinterest"
                        >
                            <Pin size={18} fill="white" />
                            <span className="text-sm">Pin it</span>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PinterestHoverButton;
