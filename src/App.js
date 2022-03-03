
import './App.css';
import Details from './Components/Details/Details';
import ShoppingHistory from './Components/Sidebar/Shopping-History/ShoppingHistory';
import Sidebar from './Components/Sidebar/Sidebar';
import { Switch, Route, } from "react-router-dom";
import Main from './Components/Main/Main';
import axios from 'axios';


axios.defaults.baseURL = "https://shoppify-13b6a-default-rtdb.firebaseio.com/";

function App() {
  return (
    <div className="App">

      <Sidebar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shoppinghistory" component={ShoppingHistory} />
      </Switch>
      <Details />
    </div>
  );
}

export default App;
