import React from 'react';
import classes from './Charts.module.css';
//import ProgressBar from 'react-bootstrap/ProgressBar';
// import  './Charts.css';

const Charts = () => {
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
                </div>
            </div>
            
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