import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './small-owe-info.css';
import UserFavicon from '../../atoms/UserFavicon';



interface SmallOweInfoParams { 
  amount: number; 
  path: string;
  onClick: any;
  receiverId: number;
}

const SmallOweInfo = ({amount, path, onClick, receiverId, key }: RouteComponentProps<SmallOweInfoParams>) => (
  <div className='small-owe-info'>
      <UserFavicon path={path} />
      <div className='actions'>
        <button onClick={onClick} value={receiverId}>Message</button>
      </div>


  </div>
);

export default SmallOweInfo;