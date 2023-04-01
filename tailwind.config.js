/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['"Inter"', 'sans-serif'],
        "oswalds": ['"Oswald"', 'sans-serif']
      },
      gridTemplateColumns: {
        'grid-buttons': '2fr repeat(2, 1fr)'
      },
      animation: {
        'backgroundLinearGradient':'AniLinearGradientButton 2s ease infinite',
      },
      keyframes: {
          'AniLinearGradientButton': {
            '0%, 100%': {
              'background-size':'600% 600%',
                'background-position': 'left center'
            },
            '50%': {
              'background-size':'600% 600%',
                'background-position': 'right center'
            }
        },
      }
    },
  },
  plugins: [],
}

