/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        card: '#18181B',
        'card-hover': '#242429',
        primary: '#00E5FF',
        'primary-glow': 'rgba(0, 229, 255, 0.3)',
        secondary: '#7C3AED',
        'secondary-glow': 'rgba(124, 58, 237, 0.3)',
        accent: '#22C55E',
        'accent-glow': 'rgba(34, 197, 94, 0.3)',
        muted: '#A1A1AA',
        'muted-dark': '#71717A',
        surface: '#121215',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-glow': 'rgba(0, 229, 255, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'gradient-x': 'gradientX 8s ease infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(0, 229, 255, 0.2), 0 0 30px rgba(124, 58, 237, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 229, 255, 0.5), 0 0 50px rgba(124, 58, 237, 0.3)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(124, 58, 237, 0.25), rgba(0, 229, 255, 0.15), rgba(9, 9, 11, 0))',
        'card-gradient': 'linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(18, 18, 21, 0.6) 100%)',
        'cyan-purple': 'linear-gradient(135deg, #00E5FF 0%, #7C3AED 100%)',
        'purple-cyan': 'linear-gradient(135deg, #7C3AED 0%, #00E5FF 100%)',
        'glass-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.12), transparent 70%)',
      },
    },
  },
  plugins: [],
};
