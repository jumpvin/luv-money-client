import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { popUpState } from '../../ducks/popUpState/popUpActions';
import './pop-up.css';
import Card from '../../molecules/Card';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';
import AddRule from '../AddRule';
import StatementCard from '../StatementCard';
import MakePayment from '../../pages/MakePayment'

interface PopUpParams {
  parent: string;
  handleClose: string;
}

const PopUp = ({ parent, handleClose }: RouteComponentProps<PopUpParams>) => {
  const dispatch = useDispatch();
  const popUp = useSelector(state => state.popUpState.popUp);
  const popUpData = useSelector(state => state.popUpState.data);
  
  const allStates = {
    expense: <LuvMoneyLogo />,
    newRule: <AddRule/>,
    editRule: <AddRule/>,
    statement: <StatementCard data={popUpData}/>,
    payment: <MakePayment/>,
    message: 'Message',
    none: 'None',
  }
  
  return (
    <Card addClass='pop-up fade'>
      <div 
        className='close' 
        onClick={() => parent? handleClose() : dispatch(popUpState('none'))}
      >
        X
      </div>
      { parent? allStates[parent] : allStates[popUp] }
    </Card>
  );
};

export default PopUp;