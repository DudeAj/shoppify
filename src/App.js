
import './App.css';
import { AddNewItems } from './Components/AddNewItems/AddNewItems';
import Details from './Components/Details/Details';
import ShoppingHistory from './Components/Sidebar/Shopping-History/ShoppingHistory';
import'./App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import {Switch,Route,} from "react-router-dom";
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="App">
      {/* <Sidebar />
     
     <ShoppingHistory
     />
    
      <Details />
 */}

  <Sidebar/>
      <Switch>
           <Route exact path= "/" component={Main}/>
          
            <Route path="/shoppinghistory" component={ShoppingHistory} />
           
          </Switch>
         <Details/>
         {/* <AddNewItems /> */}
    </div>
  );
}

export default App;