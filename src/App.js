import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/ProfilePage" element={<ProfilePage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
