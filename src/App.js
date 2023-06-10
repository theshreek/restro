import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
