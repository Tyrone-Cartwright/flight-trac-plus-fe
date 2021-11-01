import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Switch, Route, Redirect } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Dasboard from './pages/Dashboard';
import Login from './pages/Login';
import { auth } from './services/firebase';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
