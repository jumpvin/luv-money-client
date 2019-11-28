import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './main.css';
import Footer from '../../molecules/Footer'
import Dashboard from '../../pages/Dashboard';
import ExpsenseDetails from '../../pages/ExpenseDetails';
import Payment from '../../pages/Payment';
import Settings from '../../pages/Settings';
import PoolSettings from '../../pages/PoolSettings';

const Main = () => (
    <Router>
      <Route exact path='/' component={Dashboard} />
      <Route path='/expense-details' component={ExpsenseDetails} />
      <Route path='/payment' render = {Payment}/>
      <Route path='/settings' component={Settings} />
      <Route path='/pool-settings' component={PoolSettings} />
      <Footer />
    </Router>
);

export default Main;
