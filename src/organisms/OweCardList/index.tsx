import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetOweCard } from '../../ducks/getOweCard/getOweCardActions';
import { useEffect } from 'react';
import './owe-card-list.css';
import OweCard from '../../molecules/OweCard';

const OweCardList = () => {
  const dispatch = useDispatch();
  const oweCards = useSelector( state => state.recieveOweCard.oweCards);
  console.log(oweCards);
  useEffect(() => {
    dispatch(triggerGetOweCard());
  }, [])

  return (
    <div className='owe-card-list'>
      {
      oweCards.map((oweCard, index) => (
        <OweCard 
          key={index}
          path={oweCard.path}
          who={oweCard.who}
          amount={oweCard.amount}
          what={oweCard.what}
        />
      ))
      }
    </div>
  )
};

export default OweCardList;