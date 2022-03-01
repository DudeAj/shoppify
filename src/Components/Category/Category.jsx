import React from 'react'
import classes from './category.module.css';
import Items from './Items/Items';
const Category = () => {
    return (
        <div className={classes.category}>
            <p>Vegetables</p>
            <div className={classes.Items}>
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
            </div>

        </div>
    )
}

export default Category;