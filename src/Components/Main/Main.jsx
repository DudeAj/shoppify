import React from 'react';
import Topbar from './Topbar/Topbar';
import classes from './main.module.css';
import Category from '../Category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCategory, LoadItems, setCart } from '../../store/actions/';

const Main = ({setShowCart}) => {
    
    const categories = useSelector(state => state.data.Categories);
    const allItems = useSelector(state => state.data.items);
    const cartItems = useSelector(state => state.data.cart);
    const dispatch = useDispatch();

    const [cart,setCartInfo] = useState([]);

    useEffect(() => {
        dispatch(getCategory());
        dispatch(LoadItems());
       // setCartInfo(cartItems)
    }, []);

    console.log("Cart",cart)
    
    const setCartItem = (id, name, data) => {
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
        <div className={classes.main}>
            <Topbar />
            <div className={classes.Elements}>
                {categories.map(item => {
                    const itemData = allItems.filter(it => it.category === item.id);
                    if (itemData.length > 0) {
                        return <Category 
                        key={item.id} 
                        name={item.title} 
                        handleCategory={setCartItem} 
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