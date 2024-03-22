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

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">

    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/projects/list" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projectedit/:id" element={<EditProject />} />
        <Route path="/users" element={<UserAndRoles />} />
        {/* Otras rutas */}
      </Routes>
    </div>
    </>
  );
}

export default App;
