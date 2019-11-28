import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.css';

interface TextInputParams{
  name: string;
  value: string;
}

const TextInput = ({name,value}: RouteComponentProps<TextInputParams>)=>{
  return (
    <input type = 'text' className='input' name={name} value={value} ></input>
  )
}
export default TextInput;