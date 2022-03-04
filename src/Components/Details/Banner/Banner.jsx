import React from "react";
import classes from "./banner.module.css";

const Banner = ({ click }) => {
  return (
    <div className={classes.banner}>
      <img
        src="	https://shoppingify-lucas.netlify.app/d2e572da108f8547118b20cdb9f6e7e2.svg"
        alt="bottle"
      />

      <div className={classes.box}>
        <p>Didn’t find what you need?</p>
        <button onClick={() => click(false)}>Add item</button>
      </div>
    </div>
  );
};

export default Banner;
