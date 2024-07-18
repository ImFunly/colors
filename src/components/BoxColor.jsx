import React, { useRef, useEffect } from 'react';

function BoxColor({ color, value }) {
  const boxRef = useRef();

  useEffect(() => {
    if (value === color) {
      boxRef.current.style.backgroundColor = color;
    } else {
      boxRef.current.style.backgroundColor = 'transparent';
    }
  }, [value, color]);

  return (
    <div className={`box ${color}`} ref={boxRef}>
      {value === color ? `I am ${color}` : `I'm not a ${value} color`}
    </div>
  );
}

export default BoxColor;
