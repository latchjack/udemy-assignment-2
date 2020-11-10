import React from 'react';

const Validation = (props) => {
  let validationMsg = 'Text long enough';

  if (props.length <= 5) {
    validationMsg = 'Text too short';
  }

  return (
    <div>
      <p>{validationMsg}</p>
    </div>
  );
};

export default Validation;