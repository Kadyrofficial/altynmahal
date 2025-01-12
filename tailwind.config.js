module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        lightgray: "#F8F8F8",
        softgray: "#545454",
        gray: "rgb(58, 58, 58)",
        white: "#ffffff",
        blue: "rgb(23, 24, 94)",
        lightblue: "rgb(46, 48, 151)",
      },
      dropShadow: {
        'shad': '0 1px 27px rgba(0, 0, 0, 0.12)',
        'lightshad': '0 1px 15px rgba(0, 0, 0, 0.07)',
        'lightshadhov': '0 1px 20px rgba(0, 0, 0, 0.10)',
      },
      aspectRatio: {
        'banner': '5 / 2',
        'country': '5 / 3',
        'den': '1 / 1',
      },

    },
  },
  plugins: [],
};