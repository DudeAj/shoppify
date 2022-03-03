
import './App.css';
import { AddNewItems } from './Components/AddNewItems/AddNewItems';
import Details from './Components/Details/Details';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      {/* <Details /> */}
      <AddNewItems />
    </div>
  );
}

export default App;
