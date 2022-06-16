import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="desktopWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
