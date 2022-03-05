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

    const setCartDetails = (itemdata) => {
        const filtered = cart.filter(item => item.id === itemdata.id).length > 0 ? true : false;
        
        if (!filtered) {
            const faq = { ...itemdata, amount: 1 }
            const newCart = [...cart, faq];
            setCartInfo(newCart);
            dispatch(setCart(cart));
            
        }
        if (filtered) {
            const newArr = cart.map(obj => {
                if (obj.id === itemdata.id) {
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
                <span onClick={() => setCartDetails(data)}>+</span>
            </div>
        </div>
    )
}

export default Items;