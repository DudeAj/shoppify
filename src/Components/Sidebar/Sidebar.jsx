import React from 'react';
import classes from './sidebar.module.css';
import img from '../../images/logo.svg'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Sidebar = ({ openCart }) => {
    const cartItems = useSelector(state=> state.data.cart)

    return (
        <div className={classes.sidebar}>
            <img className={classes.img} src={img} alt="image"></img>
            <div className={classes.icons}>
                <ul>
                    <li><Link to='/'><FormatListBulletedIcon /></Link></li>
                    <li><Link to='/shoppinghistory'><RotateLeftIcon /></Link></li>
                    <li><Link to='/charts'><BarChartIcon /></Link></li>
                </ul>
            </div>
            
            <div className={classes.cart} onClick={openCart}>
            <span className={classes.box}>{cartItems.length}</span>
                <ShoppingCartIcon style={{ width: '30px', margin: '12px 0px 0px 8px' }} />
            </div>

        </div>
    )
}

export default Sidebar