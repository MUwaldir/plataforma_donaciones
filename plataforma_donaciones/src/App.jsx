import React, { useEffect } from "react";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import Success from "./components/Donate/Success";
import OrdenDetail from "./components/Layout/OrdenDetail";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProyectos } from "./redux/actions/actions";

function App() {
 

  return (
    <>
      <div className="min-h-screen flex flex-col bg-green-500  ">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />


          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/capture-order" element={<OrdenDetail />} />

          <Route exact path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
