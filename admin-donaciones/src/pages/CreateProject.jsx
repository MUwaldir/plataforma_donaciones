import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import FormCreateProject from "../components/CreateProject/FormCreateProject";

const CreateProject = ({openSlider, handleOpenSilder}) => {
  return (
    <div className="flex-grow mt-16">
      <Sidebar openSlider={openSlider} handleOpenSilder={handleOpenSilder} />
      <div className={openSlider ?"ml-12":"ml-64"}>
        <FormCreateProject  />
      </div>
    </div>
  );
};

export default CreateProject;
