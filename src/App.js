import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
