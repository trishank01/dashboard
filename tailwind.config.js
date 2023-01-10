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
        'light-success' : "#E7F6E7",
        'failed' : "#E43429",
        'light-failed' : "#FCE8EE",
        'processing' : "#FF9429",
        "light-processing" : "#FFF0E0",

      },

    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

