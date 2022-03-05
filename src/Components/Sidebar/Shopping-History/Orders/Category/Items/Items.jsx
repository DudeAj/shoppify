import React, { useState } from 'react'
import classes from './item.module.css';
import { useDispatch } from 'react-redux';
const Items = ({ data, name, id, click }) => {
    const [amount, setAmount] = useState(1);

   
    return (
        <div className={classes.ItemContainer}>

            <div className={classes.ItemBox}>

                <p>{data.name}</p>
                <span>{data.amount} pcs</span>
            </div>
        </div>
    )
}

export default Items;