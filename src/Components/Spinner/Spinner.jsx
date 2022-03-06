import React from 'react';
import classes from './spinner.module.css';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div className={classes.Backdrop}>
        <CircularProgress/>
    </div>
  )
}

export default Spinner