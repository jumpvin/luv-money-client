import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './main.css';
import Footer from '../../molecules/Footer'
import Dashboard from '../../pages/Dashboard';
import ExpsenseDetails from '../../pages/ExpenseDetails';
import Payment from '../../pages/Payment';
import Settings from '../../pages/Settings';
import PoolSettings from '../../pages/PoolSettings';
import PopUp from '../PopUp';
import AddExpense from '../AddExpense';

const Main = () => {
  const popUp = useSelector(state => state.popUpState.popUp);

  return (
    <Router>
       {popUp === 'none' ? '' :<PopUp />}
      <Route exact path='/' component={Dashboard} />
      <Route path='/expense-details' component={ExpsenseDetails} />
      <Route path='/payment' component={Payment} />
      <Route path='/expense' component={AddExpense} />
      <Route path='/pool-settings' component={PoolSettings} />
      <Route path='/settings' component={Settings} />

      <Footer />
    </Router>
  )
};

export default Main;
