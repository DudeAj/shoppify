import React from 'react'
import classes from './item.module.css';
import { useDispatch } from 'react-redux';
const Items = ({ data, name, id, click }) => {

    return (
        <div className={classes.ItemContainer}>
            <div className={classes.ItemBox}>
                <p>{data.name}</p>
                <span onClick={() => click(id)}>+</span>
            </div>
        </div>
    )
}

export default Items;