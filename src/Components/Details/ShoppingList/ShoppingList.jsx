import React, { useState } from 'react'
import ListCategory from './ListCategory/ListCategory'
import classes from './ShoppingList.module.css';
import {Create, Clear } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'

const ShoppingList = ({ change, changeName }) => {
  const category = useSelector(state => state.data.Categories);
  const cartItems = useSelector(state => state.data.cart);
  const cartName = useSelector(state => state.data.cartName);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(category);
  }, [category])

  return (

    <div className={classes.ShoppingList}>
      <div className={classes.list_container}>
        <div className={classes.list_header}>
          <p>{cartName}</p>
         { !changeName 
        ? <Create sx={{ cursor: 'pointer' }} onClick={() => change(!changeName)} /> 
        : <Clear sx={{ cursor: 'pointer' }} onClick={() => change(!changeName)} />
        }
        </div>
        {cart.map(item => {
          const itemdata = cartItems.filter(it => it.category === item.id);
          if (itemdata.length > 0) {
            return < ListCategory key={item.id} id={item.id} title={item.title} data={itemdata} />
          }
        })}

      </div>
    </div>
  )
}

export default ShoppingList
