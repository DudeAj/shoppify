import React from 'react';
import Topbar from './Topbar/Topbar';
import classes from './main.module.css';
import Category from '../Category/Category';

const Main = () => {
    return (
        <div className={classes.main}>
            <Topbar />
            <div className={classes.Elements}>
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />

            </div>
        </div>
    )
}

export default Main