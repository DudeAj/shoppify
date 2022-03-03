import React, { useState } from 'react'
import classes from "./details.module.css";
import Banner from './Banner/Banner';
import ShoppingList from './ShoppingList/ShoppingList';
import ActionContainer from './ActionContainer/ActionContainer.jsx'
import AddRecipe from '../AddRecipe/AddRecipe';


const Details = () => {
    const [showList, setShowList] = useState(true);
    return (
        <div className={classes.details}>
            {showList
                ? <>
                    <Banner />
                    <ShoppingList />
                    <ActionContainer />
                </>
                : <AddRecipe />
            }

        </div>
    )
}

export default Details