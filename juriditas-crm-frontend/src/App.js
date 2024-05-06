import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard';
import Entrypage from './page/entry/Entrypage';
import AddProcesoPage from './page/new-proceso/AddProcesoPage';
import ProcesoList from './page/proceso-listing/ProcesoList';

function App() {
  return (
    <div className="App">
      <Entrypage />
      {/*<DefaultLayout> */}
         {/*<Dashboard name="Leonardo"/> */}
        {/*<AddProcesoPage />*/}
        {/*<ProcesoList />*/}
      {/*</DefaultLayout> */}
    </div>
  );
}

export default App;
