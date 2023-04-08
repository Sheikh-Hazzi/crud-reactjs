module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  media: false,
  theme: {
    container: {
			center: true,
			screens: {
				sm: "768px",
				md: "1024px",
				lg: "1280px",
				xl: "1440px",
			},
		},
    extend: {},
  },
  plugins: [],
}