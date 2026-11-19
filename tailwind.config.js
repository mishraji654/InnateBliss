/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Calmlyss Authentic Soothing Palette
        canvas: {
          DEFAULT: '#F9F6F3', // Serene Oat/Cream primary background
          soft: '#FDFCFA',
          linen: '#F2ECE5',  // Secondary soft cashmere linen
          card: '#FFFFFF',
          sand: '#EAE1D6',
        },
        espresso: {
          950: '#140F0D', // Velvety deep espresso (for soothing dark sections)
          900: '#191412',
          850: '#211B18',
          800: '#2D201A', // Primary text color from Calmlyss (--_colors---deep-color)
          700: '#43342D',
          600: '#6B584E', // Calmlyss secondary text color (--_colors---text-color-1)
          500: '#8A766C', // Muted subtle taupe
          400: '#AC9A90',
          300: '#C5B7AE',
          200: '#D9CEC7', // Calmlyss stroke/border color (--_colors---strock-color)
          100: '#EFE9E4',
          50: '#F7F3F0'
        },
        earth: {
          bronze: '#866452', // Calmlyss primary-color
          clay: '#C78460',   // Calmlyss accent text-color-2
          terracotta: '#B9714E',
          sand: '#D4A373',
          warm: '#9C7A68'
        },
        gold: {
          champagne: '#CFA876',
          shimmer: '#E2C29A',
          muted: '#C5A880',
          soft: '#F4ECE1'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'serene': '0 10px 30px rgba(45, 32, 26, 0.04)',
        'premium': '0 20px 45px rgba(45, 32, 26, 0.07)',
        'velvet': '0 25px 60px rgba(20, 15, 13, 0.35)',
        'glow-soft': '0 0 40px rgba(199, 132, 96, 0.15)',
      },
      borderRadius: {
        'pill': '100rem',
      }
    },
  },
  plugins: [],
}
