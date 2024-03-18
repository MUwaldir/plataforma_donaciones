import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Success from './components/Donate/Success';
import OrdenDetail from './components/Layout/OrdenDetail';

function App() {
  return (
    < >
    <Router>
    <div className='min-h-screen flex flex-col bg-green-500  '>

      <Navbar />
      {/* <div className='flex-grow'> */}

      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" element = {<Home/>} />

        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/success" element={<Success/>} />
        <Route exact path="/capture-order" element={<OrdenDetail/>} />

    
        <Route exact path="/projects/:id" element={<ProjectDetail/>} />
        {/* Define otras rutas aquí */}
        </Routes>
      {/* </div> */}
      <Footer />
    </div>
    </Router>
    </>
  );
}

export default App;
