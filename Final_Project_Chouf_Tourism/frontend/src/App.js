import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import AboutUs from "./components//Aboutus"; // Correct the import
import Category from "./components/Category";
import SignIn from "./components/SignIn";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> {/* Add this route */}
          <Route path="/category" element={<Category />} />{" "}
          <Route path="/SignIn" element={<SignIn />} /> {/* Add this route */}
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
