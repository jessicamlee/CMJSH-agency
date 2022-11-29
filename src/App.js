import React from "react";

import Header from "./components/Header";
import Hero from "./layout/Hero";
import WhoAreWe from "./layout/WhoAreWe";
import Expertise from "./layout/Expertise";
import MeettheTeam from "./layout/MeettheTeam";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />

			<Hero />

			<WhoAreWe />

			<Expertise />

			<MeettheTeam />

       		<Footer />
		</div>
	);


}

export default App;
