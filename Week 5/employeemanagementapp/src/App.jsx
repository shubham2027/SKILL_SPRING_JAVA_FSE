import React, { useState } from 'react';
import './App.css';
import EmployeesList from './components/EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  // Theme state: initialized to 'light'
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Wrap entire JSX in ThemeContext Provider
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '20px' }}>
        <h1>Employee Management Application</h1>
        <p>Current Theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        <hr />
        {/* Theme is not passed as props here anymore */}
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
