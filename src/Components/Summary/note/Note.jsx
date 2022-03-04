import React from "react";
import classes from "./note.module.css";

const Note = () => {
  return (
    <div className={classes.note}>
      note
      <div className={classes.notecontent}>
        Nutrient-dense foods are those that provide substantial amounts of
        vitamins, minerals and other nutrients with relatively few calories.
        One-third of a medium avocado (50 g) has 80 calories and contributes
        nearly 20 vitamins and minerals, making it a great nutrient-dense food
        choice.{" "}
      </div>
    </div>
  );
};

export default Note;
