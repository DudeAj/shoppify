import React, { useState,useEffect } from 'react'
import classes from './item.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setCart} from '../../../store/actions/';

const Items = ({ data, name,setShowCart }) => {

    // const [cart,setCartInfo] = useState([]);

    const dispatch = useDispatch();

    const info = () => {
        setShowCart(name, data);
    }
    const cartItems = useSelector(state => state.data.cart);

    const setCartDetails = (itemdata) => {

        const filtered = cartItems.filter(item => item.id === itemdata.id).length > 0 ? true : false;

        console.log(filtered);
        if (!filtered) {
            const faq = { ...itemdata, amount: 1 }
            const newCart = [...cartItems, faq];
            dispatch(setCart(newCart));
        }
        else {
            const newArr = cartItems.map(obj => {
                if (obj.id === itemdata.id) {
                    const objAmount = obj.amount +1;
                    return { ...obj, amount: objAmount};
                }
                return obj;
            });
            dispatch(setCart(newArr));
            console.log("Filtered",newArr)
        }
    }

    return (
        <div className={classes.ItemContainer}>
            <div className={classes.ItemBox}>
                <p onClick={info}>{data.name}</p>
                <span onClick={() => setCartDetails(data)}>+</span>
            </div>
        </div>
    )
}

export default Items;