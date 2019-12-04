import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './welcome-header.css';

interface WelcomHeaderParams {
  name: string; 
  amount: number;
}

const WelcomeHeader = ({name, amount}: RouteComponentProps<WelcomHeaderParams>) => (
  <div className='welcome-header'>
    <div>
      {`Welcome Back ${name}!`}
    </div>
  </div>
);

export default WelcomeHeader;