import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import APOD from "./components/APOD";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import Mars from "./components/Mars"
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/api/apod" element={<APOD />} />
        <Route path="/api/mars" element={<Mars />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/dashboard" element={<Dashboard />} />
        <Route path="/api/nav" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
