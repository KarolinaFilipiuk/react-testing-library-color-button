import './App.css';
import { useState } from 'react';

import { FIRST_COLOR, SECOND_COLOR } from './colors';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState(FIRST_COLOR);
  const newButtonColor =
    buttonColor === FIRST_COLOR ? SECOND_COLOR : FIRST_COLOR;

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
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
