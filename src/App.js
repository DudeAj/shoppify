
import './App.css';
import Details from './Components/Details/Details';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import Charts from './Components/Sidebar/Charts/Charts';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main/>
      <Details />
    </div>
  );
}

export default App;
