import React from 'react'
import classes from './item.module.css';
const Items = () => {
    return (
        <div className={classes.ItemContainer}>
            <div className={classes.ItemBox}>
                <p>Apple</p>
                <span>+</span>
            </div>


        </div>
    )
}

export default Items