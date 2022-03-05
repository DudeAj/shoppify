import React from "react";
import classes from "./note.module.css";

const Note = ({note}) => {
  return (
    <div className={classes.note}>
      <p>Note</p>
      <div className={classes.notecontent}>
        {note}
      </div>
    </div>
  );
};

export default Note;
