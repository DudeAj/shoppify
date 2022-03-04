
import './App.css';
import Details from './Components/Details/Details';
import ShoppingHistory from './Components/Sidebar/Shopping-History/ShoppingHistory';
import Sidebar from './Components/Sidebar/Sidebar';
import Summary from './Components/Summary/Summary';

import { Switch, Route, } from "react-router-dom";
import Main from './Components/Main/Main';
import axios from 'axios';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

axios.defaults.baseURL = "https://shoppify-13b6a-default-rtdb.firebaseio.com/";

function App() {

  const [showSummery, setShowSummery] = useState(false);
  return (
    <div className="App">
      <Sidebar openCart={setShowSummery} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shoppinghistory" component={ShoppingHistory} />
      </Switch>
      {showSummery ? <Summary closeCart={setShowSummery} /> : <Details />}

    </div>
  );
}

export default App;
