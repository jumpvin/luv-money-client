import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './nav-icon.css';

interface NavIconParams {
  path: string; 
  children: any;
  activeClassName: string;
}

const NavIcon = ({ path, children, activeClassName }: RouteComponentProps<NavIconParams>) =>  (
  <NavLink exact={true} to={path} activeClassName={activeClassName}>
    {children}
  </NavLink>
);

export default NavIcon;
