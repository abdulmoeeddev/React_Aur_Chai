import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('black');

  const changeBgColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh' }}>
      <button onClick={changeBgColor}>Change Background with multiple Colors</button>
      <button onClick={() => setBgColor('white')}className="mb-4">Change to white</button>
      <button onClick={() => setBgColor('orange')} className="mb-2">Change to orange</button>
      <button onClick={() => setBgColor('black')}className="mb-2">Change to black</button>
      <button onClick={() => setBgColor('pink')}className="mb-2">Change to pink</button>
      <button onClick={() => setBgColor('red')}className="mb-2">Change to Red</button>
    </div>
  );
}

export default App;
