import React from 'react'
import classes from './deleteAddtoList.module.css'

const deleteAddToList = () => {
  return (
    <div className={classes.deleteAddtoList}>
      <button className={classes.delete}>delete</button>
      <button className={classes.Addtolist}>Add to list</button>
    </div>
  )
}

export default deleteAddToList