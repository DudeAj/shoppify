import React from 'react'
import classes from './cancelSave.module.css'

const CancelSave = ({ click, setShowList }) => {
  return (

    <div className={classes.cancelSave}>
      <button className={classes.cancel} onClick={() => setShowList(true)}>cancel</button>
      <button className={classes.save} type="submit" onClick={click}>Save</button>
    </div>
  )
}

export default CancelSave;