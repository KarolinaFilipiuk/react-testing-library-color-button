import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const [disabled, setDisabled] = useState(false);

  const handleChangeButtonColor = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleChangeButtonColor}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        onChange={(e) => {
          setDisabled(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
