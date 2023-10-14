import './App.css';

import React from 'react';
import ColorPicker from './components/ColorPicker';

function App() {
  const colors = ['#FF0000', '#00FF00', '#0738a3', '#FFFF00', '#FF00FF','#50EBEC','#FFA600','#5c056e','#FFB2D0','#108f10','#fc6f03','#01F9C6','#800000', '#c96f20', '#126694', '#f5d76c'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;