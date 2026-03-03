import React from 'react';
import { motion } from 'framer-motion';
import { Pin } from 'lucide-react';

/**
 * Pinterest Save Button Component
 * Allows users to save/pin content to their Pinterest boards
 */
const PinterestSaveButton = ({ url, media, description, className = '' }) => {
    return (
        <motion.a
            href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(description)}`}
            data-pin-do="buttonPin"
            data-pin-custom="true"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-red-600/50 ${className}`}
        >
            <Pin size={18} />
            <span>Save to Pinterest</span>
        </motion.a>
    );
};

export default PinterestSaveButton;
