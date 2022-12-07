/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: "class",
	theme: {
		screens: {
			"457wide": "457px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},

		extend: {
			backgroundImage: {
				"light-768home":
					"url('assets/images/bg/homepage/768HomePageGradient.png')",
				"light-1024home":
					"url('assets/images/bg/homepage/1024HomePageGradient.png')",
				"light-1440home":
					"url('assets/images/bg/homepage/1440HomePageGradient.png')",
				"light-768profile":
					"url('assets/images/bg/profilepage/768ProfileLight.png')",
				"light-1024profile":
					"url('assets/images/bg/profilepage/1024ProfileLight.png')",
				"light-1440profile":
					"url('assets/images/bg/profilepage/1440ProfileLight.png')",
				"dark-768profile":
					"url('assets/images/bg/profilepage/768ProfileDark.png')",
				"dark-1024profile":
					"url('assets/images/bg/profilepage/1024ProfileDark.png')",
				"dark-1440profile":
					"url('assets/images/bg/profilepage/1440ProfileDark.png')",
			},

			colors: {
				darkBlue: "rgba(7, 8, 46, 1)",
				lightBlue: "rgba(79, 177, 212, 1)",
				vlightBlue: "rgba(162, 222, 237, 0.5)",
				roleDark: "rgba(2, 4, 90, 1)",
				roleLight: "rgba(209, 239, 247, 1)",
				darkBg: "rgba(67,68,96,255)",
			},

			fontFamily: {
				Overpass: "'Overpass', sans-serif",
			},

			fontWeight: {
				light: "300",
				regular: "400",
				medium: "500",
				bold: "700",
			},

			lineHeight: {
				0: "0em",
			},

			margin: {
				0.3: "0.3em",
				0.35: "0.35em",
			},

			width: {
				"22pct": "22%",
				"28pct": "28%",
				"47pct": "47%",
			},

			maxWidth: {
				"22pct": "22%",
			},

			height: {
				128: "32rem",
				200: "50rem",
				232: "58rem",
				240: "66rem",
				292: "73rem",
			},

			minHeight: {
				justBody: "calc(100vh - 350px)",
			},

			spacing: {
				"50-": "-50px",
			},

			zIndex: {
				1: "1",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
