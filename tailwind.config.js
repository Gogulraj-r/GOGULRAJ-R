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
        bg: {
          primary: '#08090D',
          secondary: '#10131A',
          card: '#121620',
          elevated: '#171B26',
        },
        accent: {
          cyan: '#00E5FF',
          violet: '#8B5CF6',
          blue: '#3B82F6',
        },
        text: {
          primary: '#F5F7FA',
          secondary: '#A1A7B3',
          muted: '#6B7280',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(0, 229, 255, 0.2)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.3)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-dual': '0 0 35px -5px rgba(0, 229, 255, 0.2), 0 0 25px -5px rgba(139, 92, 246, 0.2)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
