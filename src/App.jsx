import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, useLocation } from "react-router-dom";
import CoinListing from './pages/CoinListing';
import CoinDetails from './pages/CoinDetails';
import Header from './components/Header'
import "./styles/App.css"
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { pathname } = useLocation()
  return (

    <div className='App'>
      {pathname !== '/login' && pathname !== '/registration' && <Header />}
      <ToastContainer/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/' element={<CoinListing />} />
        <Route path='/coinDetails/:id' element={<CoinDetails />} />
      </Routes>
    </div>

  );
}

export default App;
