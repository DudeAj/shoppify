import React from 'react'
import classes from './cancelSave.module.css'

const CancelSave = ({ click }) => {
  return (

    <div className={classes.cancelSave}>
      <button className={classes.cancel}>Discart</button>
      <button className={classes.save} type="submit" onClick={click}>Add</button>
    </div>
  )
}

export default CancelSave