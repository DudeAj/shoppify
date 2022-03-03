
import './App.css';
import Details from './Components/Details/Details';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import Summary from './Components/Summary/Summary';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      {/* <Details /> */}
      <Summary/>
    </div>
  );
}

export default App;
