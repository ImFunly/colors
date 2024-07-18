import React, { useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyFormChallenge() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <div className="box-container">
        {colors.map((color) => (
          <BoxColor 
            key={color} 
            color={color} 
            value={inputValue} 
          />
        ))}
      </div>
    </div>
  );
}

export default MyFormChallenge;
