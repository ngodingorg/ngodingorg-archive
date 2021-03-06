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
      colors: {
        'ng-cream': '#F3F3F5',
        'ng-vs-code-secondary': '#2D2D2D',
        'ng-vs-code-primary': '#1E1E1E'
      }
    },
  },
  plugins: [require("daisyui")],
}
