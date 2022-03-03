import React, { useState } from 'react'
import classes from './category.module.css';
import Items from './Items/Items';
const Category = ({ name, id, data, handleCategory }) => {


    const items = [];
    for (const item in data) {
        items.push({
            id: item,
            icon: data[item].icon,
            name: data[item].name,
            note: data[item].notes,
        });
    }

    return (
        <div className={classes.category}>
            <p className={classes.title}>{name}</p>
            <div className={classes.Items}>
                {items.map(recipe => {
                    return <Items key={recipe.id} name={name} id={id} data={recipe} click={handleCategory} />
                })}
            </div>

        </div>
    )
}

export default Category;