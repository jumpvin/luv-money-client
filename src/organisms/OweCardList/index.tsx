import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetOweCard } from '../../ducks/getOweCard/getOweCardActions';
import { useEffect } from 'react';
import './owe-card-list.css';
import OweCard from '../../molecules/OweCard';

const OweCardList = () => {
  const dispatch = useDispatch();
  const { oweCards, isLoading } = 
    useSelector( state => ({ 
      oweCards: state.recieveOweCard.oweCards,
      isLoading: state.recieveOweCard.isLoading,
    })
  );

  useEffect(() => {
    dispatch(triggerGetOweCard());
  }, [])

  return (
    <div className='owe-card-list hold-column'>
      {
        isLoading ? 'Please Wait':
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