import React,{useState} from 'react';
import './footer.css';
import NavIcon from '../../atoms/NavIcon';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';
import { ReactComponent as UserSettings } from '../../assests/icons/user-settings.svg';
import { ReactComponent as AddExpense } from '../../assests/icons/addexpense.svg';
import { ReactComponent as ExpenseDetails } from '../../assests/icons/expense-details.svg';
import { ReactComponent as Dashboard } from '../../assests/icons/dashboard.svg';
import { ReactComponent as PoolSettings } from '../../assests/icons/pool-settings.svg';

import { useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions'
import PaymentIcon from '../../atoms/PaymentIcon/Index';


const Footer = () => {
  // const { selected, setSelected } = useState('');
  
  return(

    <footer className='footer-bg'>
      <NavIcon path='/' activeClassName='active'>
        <Dashboard/>
      </NavIcon>
      <NavIcon path='/expense-details'>
        <ExpenseDetails />
      </NavIcon>
      {/* <PaymentIcon> */}
      <NavIcon path='expense'>
      <AddExpense />
      </NavIcon>
      <NavIcon path='/pool-settings' >
        <PoolSettings />
      </NavIcon>
      <NavIcon path='/settings' >
        <UserSettings />
      </NavIcon>
    </footer>
  )
  };

export default Footer;

