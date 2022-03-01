import React from 'react';
import classes from './topbar.module.css';

const Topbar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.SubContainer}>
                <p><span>Shoppingify</span> allows you take your shopping list wherever you go</p>
            </div>
            <div className={classes.SearchContainer}>
                <icon></icon>
                <input type="text" className={classes.input} placeholder="Search Items..." />
            </div>

        </div>
    )
}

export default Topbar