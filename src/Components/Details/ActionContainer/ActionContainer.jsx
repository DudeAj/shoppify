import React from 'react'
import CancelSave from './cancelSave/cancelSave'
import DeleteAddToList from './deleteAddToList/deleteAddToList';
import NameChanger from './NameChanger/NameChanger';
import classes from './actionContainer.module.css'

const ActionContainer = () => {
  return (
    <div className={classes.actionContainer}>
      <NameChanger />
      <CancelSave />
      <DeleteAddToList />
    </div>
  );
};

export default ActionContainer;
