import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {}

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
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={handleChangeButtonColor}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
