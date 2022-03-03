
import './App.css';
import Details from './Components/Details/Details';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';


axios.defaults.baseURL = "https://shoppify-13b6a-default-rtdb.firebaseio.com/";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
      <Details />
    </div>
  );
}

export default App;
