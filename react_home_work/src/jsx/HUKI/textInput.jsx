import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  const handleChange = () => {
    document.getElementById('output').innerText = inputRef.current.value;
  };

  const handleClear = () => {
    inputRef.current.value = '';

    document.getElementById('output').innerText = '';
  };

  return (
    <div>
      <label>Введите текст:</label>
      <input type="text" ref={inputRef} onChange={handleChange} />
      <button onClick={handleClear}>Очистить</button>
      <br />
      <label>Введенный текст: <span id="output"></span></label>
    </div>
  );
}

export default TextInput;



