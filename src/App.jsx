import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinListing from './components/CoinListing';
import CoinDetails from './components/CoinDetails';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path='/' element={<CoinListing/>}/>
        <Route path='/details/:id' element={<CoinDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
