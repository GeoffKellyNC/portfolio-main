import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Route, Routes } from 'react-router-dom';

import Home from './views/home/Home'

function App() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-6YS6GC8BQ5');
  }, []);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  } , [location]);

  return (
    <div className="app-body">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
