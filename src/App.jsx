import React from 'react';
import StockoutVisualizer from './components/StockoutVisualizer';

function App() {
  return (
    <div style={{ 
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <StockoutVisualizer />
    </div>
  );
}

export default App;
