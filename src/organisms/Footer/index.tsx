import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './footer.css';
import Dashboard from '../../pages/Dashboard';
import ExpsenseDetails from '../../pages/ExpenseDetails';
import Payment from '../../pages/Payment';
import Settings from '../../pages/Settings';
import PoolSettings from '../../pages/PoolSettings';

const Footer = () => (
  <Router>
    <Route exact path='/' component={Dashboard} />
    <Route path='/expense-details' component={ExpsenseDetails} />
    <Route path='/payment' component={Payment} />
    <Route path='/settings' component={Settings} />
    <Route path='/pool-settings' component={PoolSettings} />
    <footer>
      <Link to="/">Dashboard</Link>
      <Link to="/expense-details">Expense Details</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/pool-settings">Pool Settings</Link>
    </footer>
  </Router>
);

export default Footer;
