import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { popUpState } from '../../ducks/popUpState/popUpActions';
import './pop-up.css';
import Card from '../../molecules/Card';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';
import AddRule from '../AddRule';
import StatementCard from '../StatementCard';
import Payment from '../../pages/Payment';
import EditRule from '../EditRule';
import Invite from '../../organisms/Invite';
import MakePaymentBlock from '../MakePaymentBlock';
import AddExpense from '../AddExpense';
import Messages from '../../atoms/Messages'

interface PopUpParams {
  parent: string;
  handleClose: string;
}

const PopUp = ({ parent, handleClose }: RouteComponentProps<PopUpParams>) => {
  const dispatch = useDispatch();
  const popUp = useSelector(state => state.popUpState.popUp);
  const popUpData = useSelector(state => state.popUpState.data);
  console.log(popUpData);
  
  const allStates = {
    expense: <AddExpense/>,
    newRule: <AddRule/>,
    editRule: <EditRule data={popUpData}/>,
    statement: <StatementCard data={popUpData}/>,
    payment: <Payment/>,
    makePayment: <MakePaymentBlock/>,
    newPayment:'',
    message: <Messages/> ,
    invite: <Invite />,
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