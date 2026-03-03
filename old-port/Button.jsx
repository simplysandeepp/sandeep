import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    ...props
}) => {
    const baseStyles = "relative overflow-hidden font-cinzel font-bold tracking-wider px-8 py-3 group transition-all duration-300";

    const variants = {
        primary: "text-white border-2 border-flame-light hover:bg-flame/10 hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]",
        secondary: "text-white border-2 border-water-light hover:bg-water/10 hover:shadow-[0_0_20px_rgba(0,180,216,0.5)]",
        thunder: "text-white border-2 border-thunder hover:bg-thunder/10 hover:shadow-[0_0_20px_rgba(255,214,10,0.5)]",
        titan: "text-white border-2 border-titan-blood hover:bg-titan-blood/10 hover:shadow-[0_0_20px_rgba(139,0,0,0.5)]",
        ghost: "text-white/70 hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], className)}
            onClick={onClick}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>

            {/* Anime Flash Effect on Hover */}
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
        </motion.button>
    );
};

export default Button;
