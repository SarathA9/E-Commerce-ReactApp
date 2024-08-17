import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Products/:categoryName" element={<Products />} />
          <Route path="/Products" element={<AllProducts />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
