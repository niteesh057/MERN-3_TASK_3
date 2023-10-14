import React from 'react';

function ColorList({ colors, onColorSelect }) {
  const colorListStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const colorOptionStyle = {
    backgroundColor: 'white',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    margin: '5px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
  };

  return (
    <div style={colorListStyle}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ ...colorOptionStyle, backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        ></div>
      ))}
    </div>
  );
}

export default ColorList;