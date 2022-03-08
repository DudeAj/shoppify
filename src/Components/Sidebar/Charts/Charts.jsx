import React, { useEffect, useState } from 'react';
import classes from './Charts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../../store/actions';

//import ProgressBar from 'react-bootstrap/ProgressBar';
// import  './Charts.css';

const Charts = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.data.orders);
  const categories = useSelector(state => state.data.Categories);


  //Total Ordered item count 
  const [ItemCount, setItemCount] = useState(0);

  //Storing All the ordered Items
  const [item, setItems] = useState([]);

  //Storing All the categories
  const [bestCategory, setBestCategory] = useState([]);

  useEffect(() => {
    dispatch(getCategory())
    if (orders.length > 0) {
      calculateTotal(orders);
    }
  }, [orders]);

  const calculateTotal = (orders) => {

    //Iterate over all orders and return nested array into single array
    const maindata = orders.map(item => {
      const total = [...item.info];
      return total;
    }).flat();

    //Get Count of all the Category
    const cate = maindata.reduce(function (occ, item) {
      occ[item.category] = (occ[item.category] || 0) + 1;
      return occ;
    }, {});

    //convert category id into category names by comparing data with all the categories
    const cate2 = Object.entries(cate).map(info => {
      let data;
      categories.map(item => {
        if (item.id === info[0]) {

          data = { name: item.title, values: info[1] };
          return data;
        };
      })
      return data;
    });

    //shorting the category data in desending order based of the item count
    const myCategories = cate2.sort((a, b) => a.values > b.values ? 1 : -1).reverse();

    //set all the occuring category in the state
    setBestCategory(myCategories);

    //Get Count of all ordered Items
    const data = maindata.reduce(function (occ, item) {
      occ[item.name] = (occ[item.name] || 0) + 1;
      return occ;
    }, {});

    //calculated the total sum of all the ordered items
    const sumValues = Object.values(data).reduce((a, b) => a + b);

    //Setting up total item count in the state
    setItemCount(sumValues);

    //convert item objects into array of item objects for iterating
    const objects = Object.entries(data).map(info => {
      const data = { name: info[0], values: info[1] };
      return data;
    });

    //sorting the ordered item array in the decending order
    const mydata = objects.sort((a, b) => a.values > b.values ? 1 : -1).reverse();

    //set all the item data into the state
    setItems(mydata);

  }

  return (
    <div className={classes.container}>
      <div className={classes.chartContainer}>
        <div className={classes.items}>
          <h1>Top items</h1>

          <div className={classes.subitems}>
            {
              item.map((ele, index) => {
                if (index < 5) {
                  return (
                    <div key={index}>
                      <div className={classes.barDesc}>
                        <p className={classes.barTitle}>{ele.name}</p>

                        <p className={classes.barPercent}>{Math.round((ele.values * 100) / ItemCount)}%</p>
                      </div>
                      <div className={classes.progressBar}>
                        <progress className={classes.progressBar} value={ele.values} max={ItemCount} />
                      </div>
                    </div>)
                }
              })
            }
          </div>
        </div>

        <div className={classes.category}>
          <h1>Top Categories</h1>
          <div className={classes.subitems}>
            {
              bestCategory.map((cat, index) => {
                if (index < 5) {
                  return (
                    <div key={index}>
                      <div className={classes.barDesc}>
                        <p className={classes.barTitle}>{cat.name}</p>
                        <p className={classes.barPercent}>{Math.round((cat.values * 100) / ItemCount)}%</p>
                      </div>
                      <div className={classes.progressBar}>
                        <progress className={classes.progressBar} value={cat.values} max={ItemCount} />
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>

        {/* <div className={classes.summaryContainer}>
          <h1>Order Summary</h1>
          <div className={classes.orderSummary} style={{
            backgroundImage: `url('https://www.math-only-math.com/images/line-graph.png')`
          }}>
          </div>
        </div> */}


      </div>
    </div>
  )
}
export default Charts