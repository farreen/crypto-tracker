import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinListing from './pages/CoinListing';
import CoinDetails from './pages/CoinDetails';
import Header from './components/Header'
import "./App.css"
function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<CoinListing />} />
          <Route path='/coinDetails/:id' element={<CoinDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
