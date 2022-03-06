import React, { useEffect } from "react";
import classes from "./shoppinghistory.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useDispatch, useSelector } from "react-redux";
import { FetchOrders } from '../../../store/actions';
import {useHistory, useParams} from 'react-router-dom';

const ShoppingList = () => {
  
  const history = useHistory();
  const date = new Date();

  const dispatch = useDispatch();
  const orders = useSelector(state => state.data.orders)
  console.log(orders)

  useEffect(() => {
    dispatch(FetchOrders())
    
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <h1 className={classes.heading}>Shopping history</h1>
        <h3 className={classes.headingTwo}>August 2020</h3>

        {orders.map(order => {
          return <div className={classes.mainList} key={order.id} onClick={()=>history.push(`/orders/${order.id}`)}>
          <div className={classes.listHeading}>
            <h2>{order.title} </h2>
          </div>
          <div className={classes.listItems}>
            <EventNoteIcon style={{ color: '#C1C1C4', width: '20px', marginLeft: '150px', marginBottom: '-8px' }} />
            <span>{order.time.split("T")[0]}</span>
            <button>Completed</button>
            <ArrowForwardIosIcon sx={{ color: '#F9A109', width: '20px', marginLeft: '20px', marginRight: '10px', marginBottom: '-8px' }} />
          </div>
        </div>
        }
        )}
        <div className={classes.mainList}>
          <div className={classes.listHeading}>
            <h2>Grocery List </h2>
          </div>
          <div className={classes.listItems}>
            <EventNoteIcon style={{ color: '#C1C1C4', width: '20px', marginLeft: '150px', marginBottom: '-8px' }} />
            <span>Monday 27 2020</span>
            <button>Completed</button>
            <ArrowForwardIosIcon sx={{ color: '#F9A109', width: '20px', marginLeft: '20px', marginRight: '10px', marginBottom: '-8px' }} />
          </div>
        </div>

        <div className={classes.mainList}>
          <div className={classes.listHeading}>
            <h2>Grocery List </h2>
          </div>
          <div className={classes.listItems}>
            <EventNoteIcon style={{ color: '#C1C1C4', width: '20px', marginLeft: '150px', marginBottom: '-8px' }} />
            <span>Monday 27 2020</span>
            <button className={classes.btn}>Canceled</button>
            <ArrowForwardIosIcon style={{ color: '#F9A109', width: '20px', marginLeft: '20px', marginBottom: '-8px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
