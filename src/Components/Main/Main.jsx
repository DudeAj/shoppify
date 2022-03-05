import React from 'react';
import Topbar from './Topbar/Topbar';
import classes from './main.module.css';
import Category from '../Category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategory, LoadItems } from '../../store/actions/';

const Main = ({setShowCart}) => {
    
    const categories = useSelector(state => state.data.Categories);
    const allItems = useSelector(state => state.data.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory());
        dispatch(LoadItems());
    }, []);

    
   
    return (
        <div className={classes.main}>
            <Topbar />
            <div className={classes.Elements}>
                {categories.map(item => {
                    const itemData = allItems.filter(it => it.category === item.id);
                    if (itemData.length > 0) {
                        return <Category 
                        key={item.id} 
                        name={item.title} 
                        id={item.id} 
                        data={itemData}
                        setShowCart={setShowCart} />
                    }
                })}
            </div>
        </div>
    )
}

export default Main