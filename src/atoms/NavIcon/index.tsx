import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './nav-icon.css';

interface NavIconParams {
  path: string; 
  children: any;
}

const NavIcon = ({ path, children }: RouteComponentProps<NavIconParams>) => (
  <NavLink exact={true} to={path} >
    {children}
  </NavLink>
);

export default NavIcon;
