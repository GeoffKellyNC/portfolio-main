import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './views/home/Home'

function App() {
  return (
    <div className="app-body">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
