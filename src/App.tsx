import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/admin" element={<Admin />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
