import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard';
import Entrypage from './page/entry/Entrypage';

function App() {
  return (
    <div className="App">
      {/* <Entrypage /> */}
      <DefaultLayout>
        <Dashboard name="Leonardo"/>
      </DefaultLayout>
    </div>
  );
}

export default App;
