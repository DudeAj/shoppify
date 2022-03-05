import React from 'react'
import classes from './image.module.css'

const Image = ({info}) => {
  return (
    <div className={classes.Image}>
      <img src={info.icon} alt={info.name}  />
    </div>
  )
}

export default Image