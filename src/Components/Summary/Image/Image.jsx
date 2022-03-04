import React from 'react'
import classes from './image.module.css'

const Image = () => {
  return (
    <div className={classes.Image}>
      <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhY2Fkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="cake"  />
    </div>
  )
}

export default Image