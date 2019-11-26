import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './card.css';

interface CardParams { 
  addClass: string;
  children: any;
}

const Card = ({ addClass, children }: RouteComponentProps<CardParams>) => (
  <div className={`card ${addClass}`}>
    {children}
  </div>
);

export default Card;