import React from "react";
import classes from "./shoppinghistory.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventNoteIcon from '@mui/icons-material/EventNote';

const ShoppingList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
      <h1 className={classes.heading}>Shopping history</h1>
      <h3 className={classes.headingTwo}>August 2020</h3>
      <div className={classes.mainList}>
        <div className={classes.listHeading}>
          <h2>Grocery List </h2>
        </div>
        <div className={classes.listItems}>
         <EventNoteIcon style={{color:'#C1C1C4',width:'20px', marginLeft:'150px',marginBottom:'-8px'}}/>
          <span>Monday 27 2020</span>
          <button>Completed</button>
          <ArrowForwardIosIcon  style={{color:'#F9A109',width:'20px',marginLeft:'20px',marginBottom:'-8px'}}/>
        </div>
      </div>

      <div className={classes.mainList}>
        <div className={classes.listHeading}>
          <h2>Grocery List </h2>
        </div>
        <div className={classes.listItems}>
        <EventNoteIcon style={{color:'#C1C1C4',width:'20px', marginLeft:'150px',marginBottom:'-8px'}}/>
          <span>Monday 27 2020</span>
          <button className={classes.btn}>Canceled</button>
          <ArrowForwardIosIcon  style={{color:'#F9A109',width:'20px',marginLeft:'20px',marginBottom:'-8px'}}/>
        </div>
      </div>
      <div className={classes.mainList}>
        <div className={classes.listHeading}>
          <h2>Grocery List </h2>
        </div>
        <div className={classes.listItems}>
       <EventNoteIcon style={{color:'#C1C1C4',width:'20px', marginLeft:'150px'}}/>
          <span>Monday 27 2020</span>
          <button>Completed</button>
          <ArrowForwardIosIcon  style={{color:'#F9A109',width:'20px',marginLeft:'20px'}}/>
        </div>
      </div>
      <div className={classes.mainList}>
        <div className={classes.listHeading}>
          <h2>Grocery List </h2>
        </div>
        <div className={classes.listItems}>
       <EventNoteIcon style={{color:'#C1C1C4',width:'20px', marginLeft:'150px'}}/>
          <span>Monday 27 2020</span>
          <button>Completed</button>
          <ArrowForwardIosIcon  style={{color:'#F9A109',width:'20px',marginLeft:'20px'}}/>
        </div>
      </div>
      <div className={classes.mainList}>
        <div className={classes.listHeading}>
          <h2>Grocery List </h2>
        </div>
        <div className={classes.listItems}>
       <EventNoteIcon style={{color:'#C1C1C4',width:'20px', marginLeft:'150px'}}/>
          <span>Monday 27 2020</span>
          <button>Completed</button>
          <ArrowForwardIosIcon  style={{color:'#F9A109',width:'20px',marginLeft:'20px'}}/>
        </div>
      </div>
      <div className={classes.mainList}>
        <div className={classes.listHeading}>
          <h2>Grocery List </h2>
        </div>
        <div className={classes.listItems}>
       <EventNoteIcon style={{color:'#C1C1C4',width:'20px', marginLeft:'150px'}}/>
          <span>Monday 27 2020</span>
          <button>Completed</button>
          <ArrowForwardIosIcon  style={{color:'#F9A109',width:'20px',marginLeft:'20px'}}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ShoppingList;
