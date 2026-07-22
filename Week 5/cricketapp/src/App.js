import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  // Simple if-else in the flag variable
  let currentComponent;
  if (flag === true) {
    currentComponent = <ListofPlayers />;
  } else {
    currentComponent = <IndianPlayers />;
  }

  return (
    <div>
      <h1>Cricket Application</h1>
      <div>
        <button onClick={() => setFlag(true)}>Set Flag to True (List of Players)</button>
        <button onClick={() => setFlag(false)}>Set Flag to False (Indian Players)</button>
        <span> Current Flag Value: <strong>{flag ? 'true' : 'false'}</strong></span>
      </div>
      <hr />
      <div>
        {currentComponent}
      </div>
    </div>
  );
}

export default App;

