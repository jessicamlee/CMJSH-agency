const dataExpertise = [
	{
		id: 1,
		title: "Brand Identity",
		paragraph:
			"Be recognized instantly by anyone and everyone. Let your brand speak for itself with our support and tools to stand apart from your competitors.",
		imagePath: "assets/images/icons/brand_identity.png",
		imageName: "Web browser with light bulb",
	},
	{
		id: 2,
		title: "Web Development",
		paragraph:
			"Build your digital presence with a custom website design. With our help, you can deliver a captivating experience for every visitor to your site to keep them coming back.",
		imagePath: "assets/images/icons/website_development.png",
		imageName: "Web browser with closing code tag icon",
	},
	{
		id: 3,
		title: "Digital Design",
		paragraph:
			"From mobile to tablet to desktop screens, we help to make designs for everyone to experience. Using animations, videos, and graphic designs, we bring your vision to life.",
		imagePath: "assets/images/icons/digital_design.png",
		imageName: "Design tools icons",
	},
	{
		id: 4,
		title: "Marketing Analysis",
		paragraph:
			"Get noticed by being in the top-ranked searches when a potential customer searches for you. Our SEO and social media marketing strategies will help you rank higher and stand out effortlessly.",
		imagePath: "assets/images/icons/marketing_analytics.png",
		imageName: "Graph Analytics icon",
	},
];

const dataTeamMembers = [
	{
		id: 1,
		name: "Cindy Shin",
		role: "Digital Designer, UX/UI Designer",
		paragraph:
			"Cindy’s unique styles and designs aim to attract and fulfill the specific needs of her clients. For each client, she strives to understand them on a personal level.",
		fullBio: 
			"Cindy Shin is currently in the last term of her studies in New Media Design and Web Development at the British Columbia Institute of Technology. She hopes to utilize her learned skills in fulfilling her dreams as an aspiring Graphic and UX/UI designer.",
		imagePath: "assets/images/profilepics/dp_cindyshin.jpg",
		imageName: "Profile Picture of Cindy Shin",
		projectName: "Do Your Work",
		projectDesc:
			"Check out Cindy's latest project!",
		projectImagePath: "assets/images/profilepage/dyw.jpg",
		projectImageName: "Screenshot of Project",
		projectPath: "https://cinshin.com/",
		portfolioSite: "https://cinshin.com/",
		portfolioName: "Visit Cindy's Portfolio",
		emailAddress: "#",
		emailName: "#",
		LinkedInPage: "https://www.linkedin.com/in/cinshin/",
		LinkedInName: "Visit Cindy's LinkedIn",
		otherSite: "#",
		otherSiteName: "#",
	},
	{
		id: 2,
		name: "Malcolm Tan",
		role: "Web Developer, QA Lead",
		paragraph:
			"Malcolm Tan is an aspiring front-end developer based in Vancouver with a multi-media skillset in UX/UI design, brand-recognition, photography and video-editing.",
		fullBio: 
			"Malcolm Tan is an aspiring front-end developer based in Vancouver with a multi-media skillset in UX/UI design, brand-recognition, photography and video-editing. He is studying at the British Institute of Technology for New Media Design and Web Development and also has a foundational background in business management and marketing.",
		imagePath: "assets/images/profilepics/dp_malcolmtan.jpg",
		imageName: "Profile Picture of Malcolm Tan",
		projectName: "Flyo Landing Page",
		projectDesc:
			"Check out Malcolm's latest project!",
		projectImagePath: "assets/images/profilepage/flyo.jpg",
		projectImageName: "Screenshot of Project",
		projectPath: "https://malcolm-tan.com/projects/flyo.php",
		portfolioSite: "https://malcolm-tan.com/",
		portfolioName: "Visit Malcolm's Portfolio",
		emailAddress: "#",
		emailName: "#",
		LinkedInPage: "https://www.linkedin.com/in/malcolmtan-/",
		LinkedInName: "Visit Malcolm's LinkedIn",
		otherSite: "https://github.com/MalcolmTann",
		otherSiteName: "Visit Malcolm's GitHub",
	},
	{
		id: 3,
		name: "Jessica Lee",
		role: "Web Developer, React Developer",
		paragraph:
			"Jessica Lee is an aspiring Front-End/Web Developer in Vancouver, British Columbia, with a background in English Literature and Creative Writing and a passion for stories.",
		fullBio: 
			"Jessica Lee is an aspiring Front-End/Web Developer in Vancouver, British Columbia, with a background in English Literature and Creative Writing and a passion for analyzing and sharing immersive stories and experiences.",
		imagePath: "assets/images/profilepics/dp_jessicalee.jpg",
		imageName: "Profile Picture of Jessica Lee",
		projectName: "LOCLO",
		projectDesc:
			"Check out Jessica's latest project!",
		projectImagePath: "assets/images/profilepage/loclo.jpg",
		projectImageName: "Screenshot of Project",
		projectPath: "https://jessicamlee.dev/projects/locloclothing",
		portfolioSite: "https://jessicamlee.dev/",
		portfolioName: "Visit Jessica's Portfolio",
		emailAddress: "#",
		emailName: "#",
		LinkedInPage: "https://www.linkedin.com/in/jessicamlee-/",
		LinkedInName: "Visit Jessica's LinkedIn",
		otherSite: "https://github.com/jessicamlee",
		otherSiteName: "Visit Jessica's GitHub",
	},
	{
		id: 4,
		name: "Samantha Tan",
		role: "Web Developer, React Developer",
		paragraph:
			"As an enthusiastic and aspiring Front-End developer, Samantha is eager to expand her skills and broaden her professional network.",
		fullBio: 
			"As an enthusiastic and aspiring Front-End developer, Samantha began her studies at BCIT in the New Media and Web Development program, focusing on Frontend development (Javascript, PHP, HTML,CSS) along with UX/UI concepts. Samantha is eager to expand her skills and broaden her professional network.",
		imagePath: "assets/images/profilepics/dp_samanthatan.jpg",
		imageName: "Profile Picture of Samantha Tan",
		projectName: "Konasofa",
		projectDesc:
			"Check out Samantha's latest project!",
		projectImagePath: "assets/images/profilepage/konasofa.png",
		projectImageName: "Screenshot of Project",
		projectPath: "https://github.com/samantha-t28",
		portfolioSite: "https://samanthatan.ca/",
		portfolioName: "Visit Samantha's Portfolio",
		emailAddress: "#",
		emailName: "#",
		LinkedInPage: "https://www.linkedin.com/in/samantha-tan2/",
		LinkedInName: "Visit Samantha's LinkedIn",
		otherSite: "https://github.com/samantha-t28",
		otherSiteName: "Visit Samantha's GitHub",
	},
	{
		id: 5,
		name: "Hannah Smith",
		role: "Graphic Designer, QA Tester",
		paragraph:
			"Hannah is on her way to share her graphic design skills with the world from the ideation to production in her graphic design work.",
		fullBio: 
			"Hannah is on her way to share her graphic design skills with the world from the ideation to prototyping phase. Hannah plans to continue to sharing her artistic perspective by bringing her creativity in her graphic design work.",
		imagePath: "assets/images/profilepics/dp_hannahsmith.jpg",
		imageName: "Profile Picture of Hannah Smith",
		projectName: "Project Name",
		projectDesc:
			"Check out Hannah's latest project!",
		projectImagePath: "assets/images/profilepage/screenshot.jpg",
		projectImageName: "Screenshot of Project",
		portfolioSite: "https://portfolio/hlsmith.online",
		portfolioName: "Visit Hannah's Portfolio",
		emailAddress: "#",
		emailName: "#",
		LinkedInPage: "https://www.linkedin.com/in/hannah-smith-243a67233/",
		LinkedInName: "Visit Hannah's LinkedIn",
		otherSite: "#",
		otherSiteName: "#",
	},
]

export { dataExpertise, dataTeamMembers };
