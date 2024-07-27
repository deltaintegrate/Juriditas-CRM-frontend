import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './layout/partials/Footer'
import Header from './layout/partials/Header'
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard';
import Entrypage from './page/entry/Entrypage';
import AddProcesoPage from './page/new-proceso/AddProcesoPage';
import ProcesoList from './page/proceso-listing/ProcesoList';
import LandingPage from './page/landingPage/LandingPage';

function App() {

  const location = useLocation();

  const excludeHeaderFooter = location.pathname === '/login' || location.pathname === '/';

  return (
    <div className="App">
      {!excludeHeaderFooter && <Header />}
        <Routes>
        <Route path='/' element= {<LandingPage />}  />  
        <Route path='/login' element={ <Entrypage />} />
        <Route path='/dashboard' element={ <Dashboard name="Leonardo"/>} />
        <Route path='/proceso' element={<AddProcesoPage />} />
        <Route path='/proceso' element={<ProcesoList />} />
      </Routes>
      {!excludeHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
