import React, { useState } from "react";
import classes from "./nameChanger.module.css";
import { useDispatch } from "react-redux";
import {setCartName} from '../../../../store/actions';

const NameChanger = ({ handleName, setChangeName }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(setCartName(name));
    setName("");
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
