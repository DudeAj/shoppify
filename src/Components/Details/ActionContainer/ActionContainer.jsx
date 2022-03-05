import React from 'react'
import CancelSave from './cancelSave/cancelSave'
import DeleteAddToList from './deleteAddToList/deleteAddToList';
import NameChanger from './NameChanger/NameChanger';
import classes from './actionContainer.module.css'

const ActionContainer = ({ showList, changeName }) => {
  console.log(showList);
  return (
    <div className={classes.actionContainer}>

      {showList ? changeName ? <NameChanger /> : <CancelSave /> : <DeleteAddToList />}
      {/* <NameChanger handleName={setListName} /> */}
      {/* <CancelSave /> */}
      {/* <DeleteAddToList /> */}
    </div>
  );
};

export default ActionContainer;
