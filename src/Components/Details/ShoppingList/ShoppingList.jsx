import React from 'react'
import ListCategory from './ListCategory/ListCategory'
import classes from './ShoppingList.module.css';
import { useSelector } from 'react-redux';
const ShoppingList = () => {

  const cartTitle = useSelector(state => state.data.Cart)
  return (
    <div className={classes.ShoppingList}>
      <p>My Cart</p>
      <ListCategory />
    </div>
  )
}

export default ShoppingList
