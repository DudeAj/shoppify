import React, { useState } from 'react'
import classes from './cancelSave.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { OrderNow, setCart } from '../../../../store/actions';
import PopUp from '../../PopUp/PopUp';

const CancelSave = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.data.cart);
  const cartName = useSelector(state => state.data.cartName);

  const [show, setShow] = useState(false);

  const order = () => {

    console.log("nothing can be do")
    dispatch(OrderNow(cartItems, cartName, true));
  }

  const clearCart = () => {
    dispatch(OrderNow(cartItems, cartName, false));
    dispatch(setCart([]));
    setShow(false)
  }
  return (

    <div className={classes.cancelSave}>
      {show && <PopUp confirm={clearCart} cancel={() => setShow(false)} />}

      <button className={classes.cancel} onClick={() => setShow(true)}>cancel</button>

      <button className={classes.save} type="submit" disabled={!(cartItems.length)} onClick={order}>Complete</button>
    </div >
  )
}

export default CancelSave