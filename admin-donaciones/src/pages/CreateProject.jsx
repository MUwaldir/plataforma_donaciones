import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import FormCreateProject from "../components/CreateProject/FormCreateProject";

const CreateProject = () => {
  return (
    <div className="flex-grow mt-16">
      <Sidebar />
      <div className="ml-64">
        <FormCreateProject/>
      </div>
    </div>
  );
};

export default CreateProject;
