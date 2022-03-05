import React from 'react'
import classes from './summarycategory.module.css';


const Summarycategory = ({cat}) => {
  return (
   <>
    <div className={classes.Summarycategory}>
      <div className={classes.category}>category
      </div>
      <div className={classes.categoryname}> {cat} </div>
      </div>
      </>
  )
}

export default Summarycategory