import React from 'react';
import classes from './listItems.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const listItems = () => {
  return (
    <div className={classes.list_items}>
      <p>Item name</p>
      <div>
        <DeleteOutlineIcon sx={{ color: "#FFF", background: "#F9A10A" }} />
        <RemoveIcon sx={{ color: "#F9A10A" }} />
      <button>3 pcs</button>
      <AddIcon sx={{ color: "#F9A10A" }}/>
      </div>
      </div>
  )
}

export default listItems;