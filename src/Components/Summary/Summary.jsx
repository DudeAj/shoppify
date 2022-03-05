import React from "react";
import classes from "./summary.module.css";
// import CancelSave from "./cancelSave/CancelSave.jsx";
import Image from "./Image/Image.jsx";
import Name from "./name/Name";
import Summarycategory from "./Summarycategory/Summarycategory";
import Note from "./note/Note";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CancelSave from './CancelSave/cancelSave';

const Summary = ({ closeCart,itemInfo }) => {
  console.log(itemInfo);
  return (
    <div className={classes.Summary}>
      <div className={classes.button} onClick={() => closeCart(true)}>
        <KeyboardBackspaceIcon sx={{ fontSize: 15 }} />
        <p>back</p>
      </div>
      <div className={classes.Container}>
      <Image />
      <Name name={itemInfo.data.name}/>
      <Summarycategory cat={itemInfo.cat}/>
      <Note note={itemInfo.data.notes}/>
      <div className={classes.BtnHolder}>
      <CancelSave />
      </div>
      </div>
    </div>
  );
};

export default Summary;
