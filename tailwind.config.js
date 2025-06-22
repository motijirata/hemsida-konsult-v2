module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-slow': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out both',
        'fade-in-up': 'fade-in-up 0.9s cubic-bezier(.39,.575,.565,1) both',
        'fade-in-slow': 'fade-in-slow 1.8s ease-out both',
        'pop-in': 'pop-in 0.6s cubic-bezier(.39,.575,.565,1) both',
        'bounce-slow': 'bounce-slow 1.6s infinite',
      },
    },
  },
  // other Tailwind config options here...
}