import React, { useState,useEffect } from 'react'
import classes from './item.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setCart} from '../../../store/actions/';

const Items = ({ data, name, id, click,setShowCart }) => {
    const [cart,setCartInfo] = useState([]);
    const dispatch = useDispatch();

    const handleChange = () => {
        click(id, name, data);
    }

    const info = () => {
        setShowCart(name, data);
    }

    const cartItems = useSelector(state => state.data.cart);
    
    useEffect(() => {
        setCartInfo(cartItems)
    }, [cartItems])

    const setCartDetails = (data) => {
        const filtered = cart.filter(item => item.id === data.id).length > 0 ? true : false;
        
        if (!filtered) {
            const faq = { ...data, amount: 1 }
            const newCart = [...cart, faq];
            setCartInfo(newCart);
            dispatch(setCart(cart));
            
        }
        if (filtered) {
            const newArr = cart.map(obj => {
                if (obj.id === data.id) {
                    const objAmount = obj.amount +1;
                    return { ...obj, amount: objAmount};
                }
                return obj;
            });

            setCartInfo(newArr);
            dispatch(setCart(cart));
        }
        
    }


    return (
        <div className={classes.ItemContainer}>

            <div className={classes.ItemBox}>

                <p onClick={info}>{data.name}</p>
                <span onClick={setCartDetails}>+</span>
            </div>
        </div>
    )
}

export default Items;