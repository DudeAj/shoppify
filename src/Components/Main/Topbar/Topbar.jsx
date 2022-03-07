import React from "react";
import classes from "./topbar.module.css";

const Topbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.SubContainer}>
        <p>
          <span>Shoppingify</span> allows you take your shopping list wherever
          you go
        </p>
      </div>
      <div className={classes.SearchContainer}>
      <img className={classes.searchIcon} src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
        <input
          type="text"
          className={classes.input}
          placeholder="Search Items..."
        />
      </div>
    </div>
  );
};

export default Topbar;
