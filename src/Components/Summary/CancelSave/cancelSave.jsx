import React from 'react'
import classes from './cancelSave.module.css';
import { setCartItems,deleteItem } from '../../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const CancelSave = ({info}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.data.cart);

  const clicked = () => {
    dispatch(setCartItems(cartItems,info));
  }

  const deleteItemData = () => {
    dispatch(deleteItem(info.id))
  }

  return (
    <div className={classes.cancelSave}>
      <button className={classes.cancel} onClick={deleteItemData}>Delete</button>
      <button className={classes.save} type="submit" onClick={clicked}>Add to List</button>
    </div>
  )
}

export default CancelSave;