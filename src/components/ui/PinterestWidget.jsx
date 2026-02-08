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
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-cinzel font-bold text-white mb-4 text-center">
                    Latest from Pinterest
                </h3>
                <div className="flex justify-center">
                    <a
                        data-pin-do="embedUser"
                        data-pin-board-width="400"
                        data-pin-scale-height="240"
                        data-pin-scale-width="80"
                        href={widgetUrl}
                    ></a>
                </div>
            </div>
        </motion.div>
    );
};

export default PinterestWidget;
