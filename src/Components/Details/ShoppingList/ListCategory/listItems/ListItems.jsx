import React from 'react';
import classes from './listItems.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { remove, add } from '../../../../../store/actions'

const ListItems = ({ data }) => {

  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(data.id))
    console.log("Add Item", data.id, data.amount);
  }

  const addItem = () => {
    dispatch(add(data.id))
    console.log("Remove Item", data.id, data.amount);
  }
  return (
    <div className={classes.list_items}>
      <p>{data.name}</p>
      <div>
        <div className={classes.btn_container}>
          <div className={classes.delete_btn}>
            <DeleteOutlineIcon fontSize="small" sx={{ color: "#FFF", background: "#F9A10A" }} />
          </div>

          <RemoveIcon fontSize="small" sx={{ color: "#F9A10A", cursor: "pointer" }} onClick={removeItem} />

          <button>{data.amount} pcs</button>

          <AddIcon fontSize="small" sx={{ color: "#F9A10A", cursor: "pointer" }} onClick={addItem} />
        </div>
      </div>
    </div>
  )
}

export default ListItems;