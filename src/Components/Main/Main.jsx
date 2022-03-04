import React from 'react';
import Topbar from './Topbar/Topbar';
import classes from './main.module.css';
import Category from '../Category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCategory, LoadItems, setCart } from '../../store/actions/';

const Main = () => {
    const categories = useSelector(state => state.data.Categories);
    const itemStore = useSelector(state => state.data.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
        dispatch(LoadItems())
    }, []);


    let cart = [];
    const setCartItem = (id, name, data, amount) => {
        const filtered = cart.filter(item => item.id === data.id).length > 0 ? true : false;
        if (!filtered) {
            const faq = { ...data, amount: amount }
            cart.push(faq)
        }

        if (filtered) {
            const newArr = cart.map(obj => {
                if (obj.id === data.id) {
                    return { ...obj, amount: amount };
                }
                return obj;
            });
            cart = newArr;
        }
        dispatch(setCart(cart));
    }

    return (
        <div className={classes.main}>
            <Topbar />
            <div className={classes.Elements}>
                {categories.map(item => {
                    const itemcount = itemStore.filter(it => it.category === item.id).length;
                    if (itemcount > 0) {
                        return <Category key={item.id} name={item.title} handleCategory={setCartItem} id={item.id} data={item.Items} />
                    }
                })}
            </div>
        </div>
    )
}

export default Main