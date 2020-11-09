import React from 'react';
import { render } from 'react-dom';

const CharComponent = () => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  return (
    <ul style={style}>
      <li>list</li>
    </ul>
  )
};

export default CharComponent;