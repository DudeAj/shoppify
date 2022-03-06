import "./App.css";


import Details from './Components/Details/Details';
import ShoppingHistory from './Components/Sidebar/Shopping-History/ShoppingHistory';
import Sidebar from './Components/Sidebar/Sidebar';
import Charts from './Components/Sidebar/Charts/Charts';
import {useDispatch}from 'react-redux'
import { FetchOrders } from "./store/actions";
import Summary from './Components/Summary/Summary';
import { Switch, Route, } from "react-router-dom";
import Main from './Components/Main/Main';
import axios from 'axios';
<<<<<<< HEAD
import {useEffect, useState } from 'react';
=======
import { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { FetchOrders,setLoading } from './store/actions';
>>>>>>> main
import Orders from './Components/Sidebar/Shopping-History/Orders/Orders';
import Spinner from './Components/Spinner/Spinner';


axios.defaults.baseURL = "https://shoppify-13b6a-default-rtdb.firebaseio.com/";

function App() {
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(true);
  const [showList, setShowList] = useState(true);
  const [summeryData, setSummeryData] = useState({cat:"", data:{}});
  const dispatch = useDispatch()
  //const [showSummery, setShowList] = useState(true);

  const loader = useSelector(state=>state.data.loading);

  const handleCart = () => {
    setShowCart(true);
    setShowList(true);
  }

  useEffect(() => {
    dispatch(FetchOrders())
    
  }, []);
  const itemInfo = (name,data) => {
    setSummeryData({cat:name, data:data});
    setShowCart(false);
  }

  useEffect(()=> {
    dispatch(FetchOrders());
  },[]);
  
  return (
    <div className="App">
      <Sidebar openCart={handleCart} />
      
      <div className='PageHolder'>

      <Switch>
        <Route exact path="/"><Main setShowCart={itemInfo}/></Route>
        <Route path="/shoppinghistory" component={ShoppingHistory} />
        <Route path="/charts" component={Charts} />
        <Route path="/orders/:id" component={Orders} />
      </Switch>
      </div>
      {showCart ? <Details showList={showList} setShowList={setShowList} /> : <Summary itemInfo={summeryData} closeCart={setShowCart} />}
      {loader ? <Spinner/> : null}
    </div>
  );
}

export default App;
