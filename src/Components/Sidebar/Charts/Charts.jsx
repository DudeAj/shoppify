import React, { useEffect,useState } from 'react';
import classes from './Charts.module.css';
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";

const Charts = () => {


  const items = useSelector(state => state.data.items)
  const categories = useSelector(state => state.data.Categories);
      const orders = useSelector(state => state.data.orders);

  console.log("categories",categories);
  console.log("orders",orders)
   console.log("items",items)

let b =[{}];

    return (
      <div className={classes.container}>
        <div className={classes.chartContainer}>
          <div className={classes.items}>
            <h1>Top items</h1>
            
            {
              orders.map(order => {
                const item = { order }
                
          
              })
            }
              <div className={classes.subitems}>
                <div className={classes.barDesc}>
                  <p className={classes.barTitle}>Grapes</p>
                  <p className={classes.barPercent}>12%</p>
              </div> 
               <div className={classes.progressBar}>
                 <progress className={classes.progressBar} value="12" max="100"> 32% </progress>
                </div>
=======
import { useSelector } from 'react-redux';
//import ProgressBar from 'react-bootstrap/ProgressBar';
// import  './Charts.css';

const Charts = () => {
  const orders = useSelector(state => state.data.orders);

  const [ItemCount,setItemCount] = useState(0);
  const [item,setItems] = useState({})

  useEffect(() => {
    //console.log(orders)
    if (orders.length > 0) {
      
      calculateTotal(orders);
      //dispatch(FetchOrders())
    }
  }, [orders]);
  
  const calculateTotal = (orders) => {
    
    const data = orders.map(item => {
      const total = [...item.info];
      return total;
    }).flat().reduce(function (occ, item) {
      occ[item.name] = (occ[item.name] || 0) + 1;
      return occ;
    }, {});

    const sumValues = Object.values(data).reduce((a, b) => a + b);
    
    setItemCount(sumValues);
    setItems(data);
    
  }

  console.log(ItemCount)
  console.log(item)

  return (
    <div className={classes.container}>
      <div className={classes.chartContainer}>
        <div className={classes.items}>
          <h1>Top items</h1>
          <div className={classes.subitems}>
            <div className={classes.barDesc}>
              <p className={classes.barTitle}>Grapes</p>
              <p className={classes.barPercent}>12%</p>
            </div>
            <div className={classes.progressBar}>
              <progress className={classes.progressBar} value="12" max="100"> 32% </progress>
>>>>>>> main
            </div>
          </div>
<<<<<<< HEAD
          
          <div className={classes.category}>
            <h1>Top Categories</h1>
            
            {/* {
             items.reduce(function (occ, item) {
                occ[item.category] = (occ[item.category] || 0) + 1;
                return occ;
              }, {})
              
            } */}
     
      
        
              <div className={classes.subitems}>
=======
>>>>>>> main

          <div className={classes.barDesc}>
            <p className={classes.barTitle}>Rice</p>
            <p className={classes.barPercent}>10%</p>
          </div>
          <div className={classes.progressBar}>
            <progress className={classes.progressBar} value="10" max="100"> 32% </progress>

          </div>

          <div className={classes.barDesc}>
            <p className={classes.barTitle}>Chicken 1kg</p>
            <p className={classes.barPercent}>8%</p>
          </div>
          <div className={classes.progressBar}>
            <progress className={classes.progressBar} value="8" max="100"> 32% </progress>

          </div>
        </div>

        <div className={classes.category}>
          <h1>Top Categories</h1>
          <div className={classes.subitems}>

            <div className={classes.barDesc}>
              <p className={classes.barTitle}>Fruit and vegetables</p>
              <p className={classes.barPercent}>23%</p>
            </div>
            <div className={classes.progressBar}>
              <progress className={classes.progressBar} value="23" max="100"> 32% </progress>
            </div>

            <div className={classes.barDesc}>
              <p className={classes.barTitle}>Meat and Fish</p>
              <p className={classes.barPercent}>14%</p>
            </div>
            <div className={classes.progressBar}>
              <progress className={classes.progressBar} value="14" max="100"> 32% </progress>
            </div>

            <div className={classes.barDesc}>
              <p className={classes.barTitle}>Pets</p>
              <p className={classes.barPercent}>11%</p>
            </div>
            <div className={classes.progressBar}>
              <progress className={classes.progressBar} value="11" max="100"> 32% </progress>
            </div>

          </div>
        </div>

        <div className={classes.summaryContainer}>
          <h1>Order Summary</h1>
          <div className={classes.orderSummary} style={{
            backgroundImage: `url('https://www.math-only-math.com/images/line-graph.png')`
          }}>
          </div>
        </div>


      </div>
    </div>
  )
}
export default Charts