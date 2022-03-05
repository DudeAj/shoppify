import React from "react";
import classes from "./name.module.css";

const Name = ({name}) => {
  return <div className={classes.name}>
    <p>Name</p>
    <span> {name} </span>
  </div>;
};

export default Name;
