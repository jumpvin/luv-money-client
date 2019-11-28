import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './card-icon.css';

interface CardIconParams {
  path: string; 
  src: string;
}

const CardIcon = ({ path, src }: RouteComponentProps<CardIconParams>) => (
  <NavLink exact={true} to={path} >
    <img src={src} alt='Nav Icon' /> 
  </NavLink>
);

export default CardIcon;
