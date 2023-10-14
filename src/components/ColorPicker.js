import React, { useState } from 'react';
import ColorList from './ColorList';
import './style.css';

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(true);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    
  };

  const buttonStyle = {
    backgroundColor: '#08c93c',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
  };

  return (
    <div className='ni'>
      <h1>Color Picker</h1>
      <div id='ni_2'style={{ backgroundColor: selectedColor }}>
        {showColorList && (
          <ColorList colors={colors} onColorSelect={handleColorSelect} />
        )}
        <button onClick={handleButtonClick} style={buttonStyle}>Pick a color</button>
      </div>
    </div>
  );
}

export default ColorPicker;