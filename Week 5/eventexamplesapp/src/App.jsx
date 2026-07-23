import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  // State for the counter, initialized to 1
  const [count, setCount] = useState(1);

  // Method a: Increment the value of the counter
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Method b: Say Hello followed by a static message
  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  // Increment button invokes multiple methods
  const handleIncrement = () => {
    incrementCount();
    sayHello();
  };

  // Decrement button decreases the value of the counter
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Say Welcome button invokes function with 'welcome' as argument
  const handleWelcome = (message) => {
    alert(message);
  };

  // Synthetic event handler
  const OnPress = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>{count}</div>
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={() => handleWelcome('welcome')}>Say welcome</button>
      <br />
      <button onClick={OnPress}>Click on me</button>
      <br />
      <br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
