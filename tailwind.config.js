module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/images/background.jpg')",
        'hero': "url('https://products.ls.graphics/mesh-gradients/images/11.-Fuchsia_1.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}