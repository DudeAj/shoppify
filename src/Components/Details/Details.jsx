import React, { useState } from 'react'
import classes from "./details.module.css";
import Banner from './Banner/Banner';
import ShoppingList from './ShoppingList/ShoppingList';
import ActionContainer from './ActionContainer/ActionContainer.jsx'
import AddRecipe from '../AddRecipe/AddRecipe';


const Details = ({showList, setShowList}) => {
    //const [showList, setShowList] = useState(true);
    
    const [changeName, setChangeName] = useState(false);
    return (
        <div className={classes.details}>
            <div className={classes.container} style={{ backgroundColor: showList ? "blanchedalmond" : "" }}>
                <div className={classes.BodyContainer} >
                    {showList
                        ? <>
                            <Banner list={showList} click={setShowList} />
                            <ShoppingList changeName={changeName} change={setChangeName} />
                        </>
                        : <AddRecipe showList />}
                    {showList ? <ActionContainer showList={showList} changeName={changeName} setChangeName={setChangeName}  /> : null}
                </div>
            </div>
        </div>
    )
}

export default Details