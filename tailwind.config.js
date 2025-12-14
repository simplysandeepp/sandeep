/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Demon Slayer
                flame: {
                    DEFAULT: '#FF6B35',
                    light: '#FFA552',
                    dark: '#FF8C42'
                },
                water: {
                    DEFAULT: '#0077B6',
                    light: '#00B4D8',
                    dark: '#0096C7'
                },
                thunder: {
                    DEFAULT: '#FFD60A',
                    light: '#FFB700',
                    dark: '#FFC300'
                },
                wind: {
                    DEFAULT: '#06FFA5',
                    light: '#00B386',
                    dark: '#00D9A3'
                },
                stone: {
                    DEFAULT: '#6C757D',
                    light: '#CED4DA',
                    dark: '#ADB5BD'
                },
                mist: {
                    DEFAULT: '#F8F9FA',
                    light: '#DEE2E6',
                    dark: '#E9ECEF'
                },
                insect: {
                    DEFAULT: '#9D4EDD',
                    light: '#E0AAFF',
                    dark: '#C77DFF'
                },
                serpent: {
                    DEFAULT: '#7209B7',
                    light: '#480CA8',
                    dark: '#560BAD'
                },
                love: {
                    DEFAULT: '#FF006E',
                    light: '#FF4AA4',
                    dark: '#FF1E8D'
                },
                // Attack on Titan
                titan: {
                    green: '#006747',
                    beige: '#C9ADA7',
                    wall: '#4A4E69',
                    blood: '#8B0000'
                },
                // Death Note
                notebook: {
                    DEFAULT: '#E8D5B7',
                    dark: '#D4C5B9'
                },
                kira: {
                    DEFAULT: '#DC143C',
                    dark: '#B22222'
                },
                l: {
                    DEFAULT: '#4682B4',
                    light: '#5F9EA0'
                },
                ryuk: {
                    DEFAULT: '#1A1A1A',
                    gray: '#2D2D2D'
                }
            },
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                bebas: ['Bebas Neue', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                marker: ['Permanent Marker', 'cursive'],
                jp: ['Noto Sans JP', 'sans-serif']
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 0.5s linear',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                }
            }
        },
    },
    plugins: [],
}
