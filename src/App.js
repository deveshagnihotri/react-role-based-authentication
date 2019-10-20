import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './components/authPage';
import HomePage from './components/homePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer autoClose={1000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={AuthPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
