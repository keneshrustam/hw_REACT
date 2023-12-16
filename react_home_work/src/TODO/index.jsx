import React, { useState } from 'react';

const Input = ({name, onChange}) => {
  const [inputValue, InputValue] = useState('');

  const handleChange = (inputValue) => {
    onChange(inputValue);
  };

  return (
    <div>
        <h1>Change {name}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => InputValue(event.target.value)}
        placeholder="Enter something..."
      />
      <p>You entered: {inputValue}</p>
      <button onClick={(event)=>handleChange(inputValue)}>Click me</button>
    </div>
  );
};

export default Input;
