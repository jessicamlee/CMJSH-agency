import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/ProfilePage" element={<ProfilePage />} />
				</Routes>
			</Router>
			<Footer />
		</>
	);
}

export default App;
