import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css';

function App() {
  const [star, setStar] = useState(Array(5).fill());
  const [rate, setRate] = useState(null);
  const [hoverRate, setHoverRate] = useState(null);

  const fillColor = (index) => {
    setRate(index + 1);
    setHoverRate(index + 1);
  };

  const resetColor = () => {
    setHoverRate(null);
  };

  return (
    <>
      {star.map((_, index) => (
        <FaStar
          key={index}
          onClick={() => fillColor(index)}
          onMouseEnter={() => fillColor(index)}
          onMouseLeave={resetColor}
          style={{
            fontSize:"30px",
            color:
              (hoverRate || rate) > index
                ? '#FFFF00' 
                : '#CCCCCC', 
          }}
        />
      ))}
   
    </>
  );
}

export default App;
