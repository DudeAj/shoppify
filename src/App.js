
import './App.css';
import Details from './Components/Details/Details';
import ShoppingHistory from './Components/Sidebar/Shopping-History/ShoppingHistory';
import'./App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import Summary from './Components/Summary/Summary';

import {Switch,Route,} from "react-router-dom";
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="App">
    
      {/* <Details /> */}
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
         {/* <Details/> */}
         <Summary/>
    </div>
  );
}

export default App;
