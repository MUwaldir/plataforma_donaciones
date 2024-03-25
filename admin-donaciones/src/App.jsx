import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import ProjectList from "./pages/ProjectList";
import ProjectDetails from "./pages/ProjectDetails";
import EditProject from "./pages/EditProject";
import UserAndRoles from "./pages/UserAndRoles";
import Navbar from "./components/Layout/Navbar";
import Registro from "./pages/Registro";

function App() {
  const [openSlider, setOpenSlider] = useState(false);
  const handleOpenSilder = () => {
    setOpenSlider(!openSlider);
  };
  return (
    <>
    <div className="min-h-screen flex flex-col">

    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/registro" element={<Registro />} /> */}

        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard openSlider={openSlider} handleOpenSilder={handleOpenSilder} />} />
        <Route path="/create-project" element={<CreateProject openSlider={openSlider} handleOpenSilder={handleOpenSilder} />} />
        <Route path="/projects/list" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projectedit/:id" element={<EditProject />} />
        <Route path="/users" element={<UserAndRoles openSlider={openSlider} handleOpenSilder={handleOpenSilder} />} />
        {/* Otras rutas */}
      </Routes>
    </div>
    </>
  );
}

export default App;
