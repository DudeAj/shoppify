import React from 'react'
import classes from './cancelSave.module.css'

const CancelSave = () => {
  return (
    <div className={classes.cancelSave}>
      
      <button className={classes.cancel}>cancel</button>
      <button className= {classes.save}>Save</button>
      </div>
  )
}

export default CancelSave