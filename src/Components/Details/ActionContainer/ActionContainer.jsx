import React from 'react'
import cancelSave from './cancelSave/cancelSave.jsx'
import deleteAddToList from './deleteAddToList/deleteAddToList.jsx'
import NameChanger from './NameChanger/NameChanger'     
import classes from './actionContainer.module.css'                 

const ActionContainer = () => {
  return (
    <div className={classes.actionContainer}>
      action ActionContainer
      
        <NameChanger/>
        <cancelSave/>
        <deleteAddToList/>

    </div>
  )
  
}

export default ActionContainer