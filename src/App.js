import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//pages
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import About from "./pages/About"
import Error from "./pages/Error"
import CartPage from "./pages/CartPage"
import CheckOut from "./pages/Checkout"
import PrivateRoute from "./pages/PrivateRoute"
//components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="products" element={<Products></Products>}></Route>
            <Route path="products/:id" element={<SingleProduct></SingleProduct>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="cart" element={<CartPage></CartPage>}></Route>
            <Route path="/checkout" element={<PrivateRoute><CheckOut /></PrivateRoute>} />
            <Route path="/*" element={<Error></Error>}></Route>
          </Routes>
          <Footer></Footer>
          
      </div>
    </Router>
  );
}

export default App;
