import React, { useState } from 'react'
import classes from './category.module.css';
import Items from './Items/Items';
import { useSelector } from 'react-redux'

const Category = ({ name, id, data, handleCategory }) => {

   //const allItems = useSelector(state => state.data.cart);

    // if (allItems.length === 0) {
    //     return <div>loading</div>
    // }

    return (
        <div className={classes.category}>
            <p className={classes.title}>{name}</p>
            <div className={classes.Items}>
                {data.map(recipe => {
                    if (recipe.category === id) {
                        return <Items key={recipe.id} name={name} id={id} data={recipe} />
                    }
                })}
            </div>
        </div>
    )
}

export default Category;