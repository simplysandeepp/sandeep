import React from 'react';
import { twMerge } from 'tailwind-merge';

const SectionContainer = React.forwardRef(({ children, className, id }, ref) => {
    return (
        <section
            ref={ref}
            id={id}
            className={twMerge("min-h-screen w-full relative overflow-hidden", className)}
        >
            {children}
        </section>
    );
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
