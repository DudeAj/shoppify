import React from 'react';
import Topbar from '../../../Main/Topbar/Topbar';
import classes from './orders.module.css';
import Category from './Category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCategory, LoadItems, setCart } from '../../../../store/actions/';
import { useHistory, useParams, Link } from 'react-router-dom';
import { KeyboardBackspace, EventNote } from '@mui/icons-material';

const Main = () => {
    const param = useParams();
    const dispatch = useDispatch();

    const categories = useSelector(state => state.data.Categories);
    const orders = useSelector(state => state.data.orders);
    const [items, setItems] = useState([]);

    useEffect(() => {
        dispatch(getCategory())

        const itemLen = orders.filter(it => it.id === param.id);
        setItems(...itemLen);
    }, [param]);


    if (!items || items.length === 0) {
        return <div>Loading</div>
    }
    return (
        <div className={classes.main}>
            <div className={classes.topbar}>
                <Link to="/" className={classes.back}><KeyboardBackspace />Back</Link>
                <h1>{items.title}</h1>
                <p className={classes.date}><EventNote fontSize="small" sx={{ marginRight: "5px" }} />{items.time.split("T")[0]}</p>
            </div>
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