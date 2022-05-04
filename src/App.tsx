import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
