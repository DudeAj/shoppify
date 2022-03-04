import React from "react";
import classes from "./nameChanger.module.css";

const NameChanger = () => {
  return (
    <div className={classes.NameChanger}>
      <input type="text" placeholder="Enter a name" /> 
      <button>save</button>{" "}
    </div>
  );
};

export default NameChanger;
