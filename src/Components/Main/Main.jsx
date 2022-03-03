import React from 'react';
import Topbar from './Topbar/Topbar';
import classes from './main.module.css';
import Category from '../Category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCategory } from '../../store/actions/';

const Main = () => {
    const categories = useSelector(state => state.data.Categories);
    // console.log(categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
    }, []);

    const category = [];

    const setCartItem = (id) => {

        if (!category.includes(id)) {
            category.push(id);
        }
        console.log(category);
    }




    return (
        <div className={classes.main}>
            <Topbar />
            <div className={classes.Elements}>
                {categories.map(item => {
                    return <Category key={item.id} name={item.title} handleCategory={setCartItem} id={item.id} data={item.Items} />
                })}
            </div>
        </div>
    )
}

export default Main