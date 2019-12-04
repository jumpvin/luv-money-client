import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.css';

interface TextInputParams{
  type: string;
  name: string;
  value: string;
  onChange():string;
}

const TextInput = ({ type,name,value,onChange}: RouteComponentProps<TextInputParams>)=>{
  return (
    // <input type={type} className='input' name={name} value={value} required ></input>

    <div className="group">      
      <input type={type} value={value} onChange={onChange} required></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{name}</label>
    </div>
  )
}

export default TextInput;