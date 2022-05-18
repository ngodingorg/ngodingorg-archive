module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ng-mono': ['Space Mono', 'monospace'],
        'ng-text': ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
}
