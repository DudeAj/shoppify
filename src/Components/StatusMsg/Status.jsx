import React from 'react';
import classes from './status.module.css';
const Status = ({msg, type}) => {
    let style = null;
    if(type === "success") {
        style = `${classes.success} ${classes.background}`;
    } 
    if(type === "error") {
        style = `${classes.error} ${classes.background}`;
    }
  return (
    <div className={style}><p>{msg}</p></div>
  )
}

export default Status