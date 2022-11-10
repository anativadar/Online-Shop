import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./index.css";
import ProductList from "./components/ProductsList"
import Product from "./components/Product";
import AdminPage from "./pages/AdminPage"
import Home from "./pages/Home"
import Products from "./pages/Products"
import NavBar from "./static/NavBar";


export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

/*function Home() {
    return <h2>Home</h2>;
  }
  
  function Products() {
    return <h2>Products</h2>;
  }
  
  function Admin() {
    return <h2>Admin</h2>;
  }*/








ReactDOM.render(<NavBar></NavBar>, document.getElementById('root'));
   
 

