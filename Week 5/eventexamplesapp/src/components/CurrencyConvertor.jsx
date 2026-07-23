import React, { useState } from 'react';
import './CurrencyConvertor.css';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('80');
  const [currency, setCurrency] = useState('Euro');

  const handleSubmit = (e) => {
    // Prevent the default form submission
    e.preventDefault();
    
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
      alert("Please enter a valid amount.");
      return;
    }

    // Rate: 1 Euro = 80 Rupees (matching 80 * 80 = 6400 in the screenshot)
    const rate = 80;
    const convertedAmount = numericAmount * rate;
    
    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div>
      <h2 className="convertor-heading">Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount-input">Amount: </label>
          <input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="currency-input">Currency: </label>
          <input
            id="currency-input"
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" style={{ marginLeft: '60px' }}>Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
