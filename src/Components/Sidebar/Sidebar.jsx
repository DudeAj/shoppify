import React from 'react';
import classes from './sidebar.module.css';
import img from '../../images/logo.svg'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
const Sidebar = ({ openCart }) => {
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
                <ShoppingCartIcon style={{ width: '20px', marginLeft: '8px' }} />
            </div>

        </div>
    )
}

export default Sidebar