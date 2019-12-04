import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.css';


interface ButtonParams{
  className: String;
  onClick(): String;
  children: string;
}

const Button = ({
  onClick, className,children
}: RouteComponentProps<ButtonParams>) => (

  <div className='button-main'>
      <button onClick={onClick} className={`button ${className}`}>{children}</button>
  </div>
);

export default Button;
