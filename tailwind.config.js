/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        charcoal: '#0f0f0f',
        surface: '#161616',
        surface2: '#1c1c1c',
        gold: '#c9a84c',
        gold2: '#e8c97b',
        silver: '#a0a8b4',
        cream: '#f2f0eb',
        cream2: '#d4d0c8',
        blue: '#1a6cf5',
        text: '#e8e4dc',
        text2: '#9a9590',
        text3: '#5a5650',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s ease-in-out infinite alternate',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'testimonials': 'scrollLeft 30s linear infinite',
        'float': 'float linear infinite',
        'orb-float': 'orbFloat 12s ease-in-out infinite alternate',
        'lines': 'linesAnim 6s ease-in-out infinite alternate',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(0.5)', transformOrigin: 'top' },
          '50%': { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'top' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.4' },
          '90%': { opacity: '0.1' },
          '100%': { transform: 'translateY(-10vh) translateX(100px)', opacity: '0' },
        },
        orbFloat: {
          'from': { transform: 'translate(0, 0)' },
          'to': { transform: 'translate(40px, 30px)' },
        },
        linesAnim: {
          'from': { opacity: '0.3', transform: 'scaleY(0.8)' },
          'to': { opacity: '1', transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
