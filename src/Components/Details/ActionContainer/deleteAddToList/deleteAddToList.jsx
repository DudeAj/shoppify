import React from 'react'
import classes from './deleteAddToList.module.css'

const DeleteAddToList = () => {
  return (
    <div className={classes.deleteAddtoList}>
      <button className={classes.delete}>delete</button>
      <button className={classes.Addtolist}>Add to list</button>
    </div>
  )
}

export default DeleteAddToList