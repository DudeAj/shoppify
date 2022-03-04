import React, { useState } from 'react'
import ListCategory from './ListCategory/ListCategory'
import classes from './ShoppingList.module.css';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'

const ShoppingList = ({ title, change, changeName }) => {
  const category = useSelector(state => state.data.Categories);
  const cartItems = useSelector(state => state.data.cart);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(category);
    console.log("its refreshed")
  }, [category])

  return (

    <div className={classes.ShoppingList}>
      <div className={classes.list_container}>
        <div className={classes.list_header}>
          <p>{title}</p>
          <CreateIcon sx={{ cursor: 'pointer' }} onClick={() => change(!changeName)} />
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
