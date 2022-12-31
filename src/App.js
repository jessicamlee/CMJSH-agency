import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';

function App() {
	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/OurTeam" element={<OurTeam />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
