import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { popUpState } from '../../ducks/popUpState/popUpActions';
import './pop-up.css';
import Card from '../../molecules/Card';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';
import MakePayment from '../../pages/MakePayment'

interface PopUpParams {
  parent: string; 
}

const PopUp = ({ parent }: RouteComponentProps<PopUpParams>) => {
  const dispatch = useDispatch();
  const popUp = useSelector(state => state.popUpState.popUp);
  
  const allStates = {
    expense: <LuvMoneyLogo />,
    payment: <MakePayment/>,
    rule: 'Rule',
    message: 'Message',
    none: 'None',
  }
  
  return (
    <Card addClass='pop-up'>
      <div className='close' onClick={() => dispatch(popUpState('none'))}>X</div>
      { parent? allStates[parent] : allStates[popUp] }
    </Card>
  );
};

export default PopUp;