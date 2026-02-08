import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Pinterest Profile Widget Component
 * Displays your latest Pinterest pins
 */
const PinterestWidget = ({ username = 'simplysandeepp', boardName = '', className = '' }) => {
    useEffect(() => {
        // Reload Pinterest widgets when component mounts
        if (window.PinUtils) {
            window.PinUtils.build();
        }
    }, []);

    const widgetUrl = boardName
        ? `https://www.pinterest.com/${username}/${boardName}/`
        : `https://www.pinterest.com/${username}/`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`w-full ${className}`}
        >
            <div className="bg-black/40 backdrop-blur-md border border-red-600/30 rounded-xl p-6 md:p-8 shadow-lg shadow-red-600/10">
                <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-6 text-center">
                    Latest from Pinterest
                </h3>
                <div className="flex justify-center w-full">
                    <a
                        data-pin-do="embedUser"
                        data-pin-board-width="900"
                        data-pin-scale-height="400"
                        data-pin-scale-width="115"
                        href={widgetUrl}
                        className="w-full"
                    ></a>
                </div>
            </div>
        </motion.div>
    );
};

export default PinterestWidget;
