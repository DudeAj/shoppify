import React, { useState } from "react";
import classes from "./nameChanger.module.css";

const NameChanger = ({ handleName, setChangeName }) => {
  const [name, setName] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    handleName(name);
    setChangeName(false);
  }

  return (
    <div className={classes.NameChanger}>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Enter List Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Save</button>{" "}
      </form>
    </div>
  );
};

export default NameChanger;
