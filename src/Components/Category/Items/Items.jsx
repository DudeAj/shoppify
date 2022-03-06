import React from 'react'
import classes from './item.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setCartItems} from '../../../store/actions/';

const Items = ({ data, name,setShowCart }) => {

    // const [cart,setCartInfo] = useState([]);

    const dispatch = useDispatch();

    const info = () => {
        setShowCart(name, data);
    }
    const cartItems = useSelector(state => state.data.cart);

    

    return (
        <div className={classes.ItemContainer}>
            <div className={classes.ItemBox}>
                <p onClick={info}>{data.name}</p>
                <span onClick={() => dispatch(setCartItems(cartItems,data))}>+</span>
            </div>
        </div>
    )
}

export default Items;