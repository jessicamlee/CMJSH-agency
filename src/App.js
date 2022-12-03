import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/ProfilePage" element={<ProfilePage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
