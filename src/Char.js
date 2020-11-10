import React from 'react';

const CharComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    border: '1px solid black'
  };

  return (
    <div style={style}>
      {props.letter}
    </div>
  )
};

export default CharComponent;