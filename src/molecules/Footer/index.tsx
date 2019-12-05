import React from 'react';
import './footer.css';
import NavIcon from '../../atoms/NavIcon';
import { ReactComponent as UserSettings } from '../../assests/icons/user-settings.svg';
import { ReactComponent as AddExpense } from '../../assests/icons/addexpense.svg';
import { ReactComponent as ExpenseDetails } from '../../assests/icons/expense-details.svg';
import { ReactComponent as Dashboard } from '../../assests/icons/dashboard.svg';
import { ReactComponent as PoolSettings } from '../../assests/icons/pool-settings.svg';

import { useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions'


const Footer = () => {
  
  return(

    <footer className='footer-bg'>
      <NavIcon path='/' activeClassName='active'>
        <Dashboard/>
      </NavIcon>
      <NavIcon path='/expense-details' activeClassName='active'>
        <ExpenseDetails />
      </NavIcon>
      <NavIcon path='expense' activeClassName="">
      <AddExpense />
      </NavIcon>
      <NavIcon path='/pool-settings' activeClassName='active'>
        <PoolSettings />
      </NavIcon>
      <NavIcon path='/settings' activeClassName='active'>
        <UserSettings />
      </NavIcon>
    </footer>
  )
  };

export default Footer;

