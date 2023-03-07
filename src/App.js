import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//pages
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import About from "./pages/About"
import Error from "./pages/Error"
import Cart from "./pages/Cart"
import CheckOut from "./pages/Checkout"
import Private from "./pages/Private"
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
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/products/:id" element={<SingleProduct></SingleProduct>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
            <Route path="/*" element={<Error></Error>}></Route>
          </Routes>
          <Footer></Footer>
          
      </div>
    </Router>
  );
}

export default App;
