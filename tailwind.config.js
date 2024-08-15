// tailwind.config.js
module.exports = {
  content: ["./**/*.{html,js}"], // Projeye göre dosya yolu ayarını yapın
  theme: {
    extend: {
      colors: {
        customBlue: '#1fb6ff',
        customPink: '#ff49db',
        customGreen: '#13ce66',
        customYellow: '#ffc82c',
      },
    },
  },
  plugins: [],
}
