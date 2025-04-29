import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F1E7',
        cream: '#FFF9F2',
        dark: '#333333',
        green: '#2E4E1F',
        gold: '#D4A373'
      }
    }
  },
  plugins: []
}

export default config
