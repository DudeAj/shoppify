import React from 'react';
import Topbar from '../../../Main/Topbar/Topbar';
import classes from './orders.module.css';
import Category from './Category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCategory, LoadItems, setCart } from '../../../../store/actions/';
import {useHistory, useParams} from 'react-router-dom';

const Main = () => {
    const param = useParams();
    
    const categories = useSelector(state => state.data.Categories);
    const orders = useSelector(state => state.data.orders);
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        console.log("its loaded")
        const itemLen = orders.filter(it => it.id === param.id);
        setItems(...itemLen);
        
    }, []);
    console.log(items)

    if(items.length === 0){
        return <div>Loading</div>
    }

    return (
        <div className={classes.main}>
            <Topbar />
            <div className={classes.Elements}>
                {categories.map(item => {
                    const cartItem = items.info.filter(it => it.category === item.id);
                    if (cartItem.length > 0) {
                        return <Category key={item.id} name={item.title} id={item.id} data={cartItem} />
                    }
                })}
            </div>
        </div>
    )
}

export default Main