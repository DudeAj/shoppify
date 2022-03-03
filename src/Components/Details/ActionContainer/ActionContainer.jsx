import React from "react";
import DeleteAddToList from "./DeleteAddToList/DeleteAddToList.jsx";
import NameChanger from "./NameChanger/NameChanger";
import classes from "./actionContainer.module.css";
import CancelSave from "./cancelSave/CancelSave.jsx";
import deleteAddToList from "./DeleteAddToList/DeleteAddToList.jsx";

const ActionContainer = () => {
  return (
    <div className={classes.actionContainer}>
      {/* <NameChanger/> */}
      {/* <CancelSave /> */}
      <DeleteAddToList />
    </div>
  );
};

export default ActionContainer;
