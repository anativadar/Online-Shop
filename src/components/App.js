import NavBar from "../static/NavBar";
import Products from "../pages/Producs"
import About from "../pages/About";
import AdminPage from "../pages/AdminPage";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom" 
import ProductList from "./ProductsList";
import { Router } from "react-router-dom";

function App() {
    return (
      <>
        <Router>
        <div className="container">
          <Routes>
          <Navbar />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
        </Router>
        
      </>
    )
  }
  
  export default App

