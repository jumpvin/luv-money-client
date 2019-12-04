import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.css';

interface TextInputParams{
  type: string;
  name: string;
  value: string;
}

const TextInput = ({ type,name,value}: RouteComponentProps<TextInputParams>)=>{
  return (
    // <input type={type} className='input' name={name} value={value} required ></input>

    <div className="group">      
      <input type="text" required></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{name}</label>
    </div>
  )
}

export default TextInput;