import React from 'react';
import Header from '../../molecules/Header';
import firebase from 'firebase';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPoolSuccess } from '../../ducks/getPool/getPoolActions';
import { triggerUserPool } from '../../ducks/addUserPool/userPoolActions';
import Card from '../../molecules/Card/index';
import { popUpState } from '../../ducks/popUpState/popUpActions';

const Settings = ({match}) => {
console.log('match is', match.params);
  const pool = useSelector(state => state.getPool.pool.userInfo[0]);
  const url = pool.photourl;

  const dispatch = useDispatch();
console.log(pool);
  const handleSignOut = async () => {
    await dispatch(getPoolSuccess({}))
    await firebase.auth().signOut()
  }

  const handlePaymentMethod = () => {
    dispatch(popUpState('paymentMethods'))
  }

    return (
      <div className='hold-column'>
        <Header>
          <h1>Settings</h1>
        </Header>
        <div className='settings'>
          <div className='user-img'>
            <img src={url}/>
          </div>
          <div className='not'>
            <div>
              <h4>Notifications</h4>
            </div>
            <div>
              <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
              </label>
            </div>
          </div>
            <Card addClass='payment-methods'>
              <h4>Payment Methods</h4>
              <p>Paypal</p>
              <button type='button' onClick={handlePaymentMethod}>Add Payment Method</button>
            </Card>
          <div className='sign-out'>
            <button type='button' className='sign-out-btn' onClick={handleSignOut}>Sign-Out</button>
          </div>
          {
            Object.keys(match.params).length  ? 
              <div className='add-pool'>
                <button
                 onClick={() => dispatch(triggerUserPool({ userId: pool.id, poolId: match.params.id })) }
                > Join Pool </button>
              </div>
            :''
          }   
        </div>
      </div>
  )
};

export default Settings;
