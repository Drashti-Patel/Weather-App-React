import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cities from './pages/Cities';
import HomePage from './pages/HomePage';
import Map from './pages/Map';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/cities" Component={Cities} />
          <Route path="/maps" Component={Map} />
          <Route path="/" Component={HomePage} />
          <Route path="/settings" Component={Settings} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
