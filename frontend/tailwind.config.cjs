module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '42px',
        'h2': '26px',
        'h3': '18px',
        'h4': '14px',
      },
      colors: {
        darkGreen: '#16423C',    // Primary
        lightGreen: '#4F7B43',   // Secondary
        paleGreen: '#C4DAD2',    // Secondary
        lightestGreen: '#E9EFEC',// Dominant
        accentBlue: '#A6DCEF',   // Accent
        accentBeige: '#FFE8A2',  // Accent
      },
      fontFamily: {
        primary: ['"Montserrat"', 'sans-serif'], // Primary font for headers
        secondary: ['"Open Sans"', 'sans-serif'], // Secondary font for body
      },
    },
  },
  plugins: [],
};
