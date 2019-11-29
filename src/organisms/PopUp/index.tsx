import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import './pop-up.css';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';
import AddRule from '../AddRule'

interface PopUpParams {
  parent: string; 
}

const PopUp = ({ parent }: RouteComponentProps<PopUpParams>) => {
  const popUp = useSelector(state => state.popUpState.popUp);
  
  const allStates = {
    expense: <LuvMoneyLogo />,
    payment: 'Payment',
    rule: <AddRule/>,
    message: 'Message',
    none: 'None',
  }

  return (
    <div className='pop-up'>
      { parent? allStates[parent] : allStates[popUp] }
    </div>
  );
};

export default PopUp;