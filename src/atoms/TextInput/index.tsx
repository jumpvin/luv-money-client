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
    <input type={type} className='input' name={name} value={value} required ></input>
  )
}


export default TextInput;