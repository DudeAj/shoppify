import React, { useEffect, useState } from "react";
import classes from "./shoppinghistory.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useDispatch, useSelector } from "react-redux";
import { FetchOrders } from '../../../store/actions';
import { useHistory } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';

const ShoppingList = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const arrayOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const orders = useSelector(state => state.data.orders);
  console.log(orders, "ordersrs")

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(FetchOrders())
    }
  }, [orders]);




  const years = orders.map(order => order.time.substring(0, 4)).filter((v, i, a) => a.indexOf(v) === i).sort().reverse();
  const months = orders.map(order => order.time.substring(5, 7)).filter((v, i, a) => a.indexOf(v) === i).sort();


  const data = years.map(year => {
    return months.map((month, id) => {
      const itemData = orders.filter(it => {
        if (it.time.substring(0, 4) == year && it.time.substring(5, 7) === month) {
          return it;
        }
      });
      if (itemData.length > 0) {
        return <div key={id}> <h3 className={classes.headingTwo}>{arrayOfMonths[Number(month - 1)]} {year}</h3>
          {orders.map(order => {
            if (itemData.length > 0) {
              if (order.time.substring(0, 4) === year && order.time.substring(5, 7) === month) {
                return <div key={order.id} className={classes.mainList} onClick={() => history.push(`/orders/${order.id}`)}>
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
            }

          })}
        </div>
      }
    })
  })

  if (orders.length === 0) {
    return <Spinner />
  }

  return (
    
    <div className={classes.container}>
      {/* {results} */}
      <div className={classes.main}>
        <h1 className={classes.heading}>Shopping history</h1>
        {data}
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
    </div >
  );
};

export default ShoppingList;
