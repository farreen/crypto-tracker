import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinListing from './components/CoinListing';
import CoinDetails from './components/CoinDetails';
import Header from './components/Header'
import "./App.css"
function App() {

  return (
    // <div className='App'>
    //   <Router>
    //     <Header/>
    //     <Routes>
    //     <Route path='/' element={<CoinListing/>}/>
    //     <Route path='/details/:id' element={<CoinDetails/>}/>
    //     </Routes>
    //   </Router>
    // </div>

    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<CoinListing />} />
          <Route path='/details/:id' element={<CoinDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
