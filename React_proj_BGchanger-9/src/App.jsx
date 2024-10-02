import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('black');

  const changeBgColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column', paddingBottom: '20px' }}>
      <button onClick={changeBgColor} style={{ borderRadius: '20px', padding: '10px 20px', margin: '5px' }}>Change Background with multiple Colors</button>
      <button onClick={() => setBgColor('white')} style={{ borderRadius: '20px', padding: '10px 20px', margin: '5px' }}>Change to white</button>
      <button onClick={() => setBgColor('orange')} style={{ borderRadius: '20px', padding: '10px 20px', margin: '5px' }}>Change to orange</button>
      <button onClick={() => setBgColor('black')} style={{ borderRadius: '20px', padding: '10px 20px', margin: '5px' }}>Change to black</button>
      <button onClick={() => setBgColor('pink')} style={{ borderRadius: '20px', padding: '10px 20px', margin: '5px' }}>Change to pink</button>
      <button onClick={() => setBgColor('red')} style={{ borderRadius: '20px', padding: '10px 20px', margin: '5px' }}>Change to Red</button>
    </div>
  );
}

export default App;
