import React from 'react'
import ListCategory from './ListCategory/ListCategory'
import classes from './ShoppingList.module.css';
import CreateIcon from '@mui/icons-material/Create';

const ShoppingList = () => {
  return (
    
         <div className={classes.ShoppingList}>
           <div className={classes.list_container}>
             <div className={classes.list_header}>
             <p>Shopping list</p>
             <CreateIcon />
             </div>
      <ListCategory/>
           </div>
    </div>
  )
}

export default ShoppingList
