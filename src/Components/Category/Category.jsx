import React, { useState } from 'react'
import classes from './category.module.css';
import Items from './Items/Items';
import { useSelector } from 'react-redux'
const Category = ({ name, id, data, handleCategory }) => {

    const allItems = useSelector(state => state.data.items);

    //console.log(allItems)
    const items = [];
    for (const item in data) {
        items.push({
            id: item,
            icon: data[item].icon,
            name: data[item].name,
            note: data[item].notes,
        });
    }

    if (allItems.length === 0) {
        return <div>loading</div>
    }

    return (
        <div className={classes.category}>
            <p className={classes.title}>{name}</p>
            <div className={classes.Items}>
                {allItems.map(recipe => {
                    if (recipe.category === id) {
                        return <Items key={recipe.id} name={name} id={id} data={recipe} click={handleCategory} />
                    }
                })}
            </div>
        </div>
    )
}

export default Category;