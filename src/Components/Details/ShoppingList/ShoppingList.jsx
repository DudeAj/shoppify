import React from 'react'
import ListCategory from './ListCategory/ListCategory'
import classes from './ShoppingList.module.css';
const ShoppingList = () => {
  return (
    
         <div className={`${classes.ShoppingList}`}>
      <p>Shopping list</p>
      <ListCategory/>


    </div>
  )
}

export default ShoppingList
