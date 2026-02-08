import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/SectionContainer';
import PinterestFollowButton from '../ui/PinterestFollowButton';
import PinterestWidget from '../ui/PinterestWidget';

/**
 * Pinterest Section Component
 * Displays Pinterest Follow Button and Profile Widget
 * Positioned after the Experience section
 */
const PinterestSection = () => {
    return (
        <SectionContainer className="py-20 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4 text-shadow-thunder">
                        Follow on Pinterest
                    </h2>
                    <p className="text-gray-400 text-lg font-inter max-w-2xl mx-auto">
                        Discover my latest projects, designs, and creative inspiration
                    </p>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-4 shadow-[0_0_10px_#dc2626]" />
                </motion.div>

                {/* Pinterest Follow Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <PinterestFollowButton username="simplysandeepp" />
                </motion.div>

                {/* Pinterest Widget - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full max-w-7xl mx-auto"
                >
                    <PinterestWidget username="simplysandeepp" className="w-full" />
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default PinterestSection;
