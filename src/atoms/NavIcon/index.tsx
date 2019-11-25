import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './nav-icon.css';

interface NavIconParams {
  path: string; 
  src: string;
}

const NavIcon = ({ path, src }: RouteComponentProps<NavIconParams>) => (
  <NavLink exact={true} to={path} >
    <img src={src} alt='Nav Icon' /> 
  </NavLink>
);

export default NavIcon;
