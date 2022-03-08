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
    dispatch(remove(data.id));
  }

  const addItem = () => {
    dispatch(add(data.id));
  }
  return (
    <div className={classes.list_items}>
      <p>{data.name}</p>
      <div>
        <div className={classes.btn_container}>
          <div className={classes.delete_btn}>
            <DeleteOutlineIcon sx={{ color: "#FFF", background: "#F9A10A", fontSize: 18 }} />
          </div>

          <RemoveIcon sx={{ color: "#F9A10A", cursor: "pointer" }} onClick={removeItem} />

          <button>{data.amount} pcs</button>

          <AddIcon sx={{ color: "#F9A10A", cursor: "pointer" }} onClick={addItem} />
        </div>
      </div>
    </div>
  )
}

export default ListItems;