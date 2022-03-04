import React from 'react'
import classes from './cancelSave.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { OrderNow } from '../../../../store/actions'

const CancelSave = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.data.cart);

  const order = () => {
    console.log("nothing can be do")
    dispatch(OrderNow(cartItems))

  }

  return (

    <div className={classes.cancelSave}>
      <button className={classes.cancel}>Discart</button>
      <button className={classes.save} type="submit" onClick={order}> Order Now</button>
    </div >
  )
}

export default CancelSave