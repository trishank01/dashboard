/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2753B8',
        'green': '#0EA80F',                    
        'pink': '#FFF0E0',                    
        'purple': '#EEE3FC',                    
        'cream':'#F2F5FC',
        'light-pink':'#FCE8EE',
        'grey':'#989BA5',
        'success' : "#0EA80F",
        'failed' : "#E43429",
        'processing' : "#FF9429",
      },

    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

