import React from 'react'
import classes from "./details.module.css";
import Banner from './Banner/Banner';
import ShoppingList from './ShoppingList/ShoppingList';
import ActionContainer from './ActionContainer/ActionContainer.jsx'
import { NoItems } from './NoItems/NoItems';

const Details = () => {
    return (
        <div className={`${classes.details}`}>
        <Banner/>
        {/* <ShoppingList/> */}
        <NoItems />
        </div>
        
        )
    }

export default Details