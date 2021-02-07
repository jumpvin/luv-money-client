import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './select.css'

interface SelectParams{

  value: string;
  onChange():string;
  children:string;
}

const Select = ({ value, onChange, children}: RouteComponentProps<SelectParams>)=>{
  return (

    <div className="group">
      <select value={value} onChange={onChange}>
        {children}
      </select>      
      <span className="highlight"></span>
      <span className="bar"></span>
    </div>
  )
}

export default Select;