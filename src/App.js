import React from "react";

import Header from "./components/Header";
import Hero from "./layout/Hero";
import Intro from "./layout/Intro";
import Expertise from "./layout/Expertise";
import MeettheTeam from "./layout/MeettheTeam";
import Contact from "./layout/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />

			<Hero />

			<Intro />

			<Expertise />

			<MeettheTeam />

			<Contact />

       		<Footer />
		</div>
	);


}

export default App;
