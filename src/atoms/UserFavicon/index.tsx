import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './user-favicon.css';

interface UserFaviconParams { path: string; }
const UserFavicon = ({ path }: RouteComponentProps<UserFaviconParams>) => (
  <div className='user-favicon'>
      <img src={path} alt='favicon' />
    </div>
);

export default UserFavicon;

