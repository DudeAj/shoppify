import React, { useState } from 'react'
import classes from './item.module.css';
import { useDispatch } from 'react-redux';
const Items = ({ data, name, id, click }) => {
    const [amount, setAmount] = useState(1);

    const handleChange = () => {
        click(id, name, data, amount);
        setAmount(amount + 1);
    }

    return (
        <div className={classes.ItemContainer}>
            <p>{data.id}</p>
            <div className={classes.ItemBox}>

                <p>{data.name}</p>
                <span onClick={handleChange}>+</span>
            </div>
        </div>
    )
}

export default Items;