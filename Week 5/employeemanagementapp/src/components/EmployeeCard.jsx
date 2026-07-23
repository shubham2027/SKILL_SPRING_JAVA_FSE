import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function EmployeeCard({ employee }) {
  // Retrieve the theme value from context using useContext
  const theme = useContext(ThemeContext);

  // Determine button className based on context theme value ('light' or 'dark')
  const buttonClass = theme === 'dark' ? 'btn-dark' : 'btn-light';

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0', borderRadius: '4px' }}>
      <h4>{employee.name}</h4>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <button className={buttonClass}>View Details</button>
      <button className={buttonClass} style={{ marginLeft: '10px' }}>Edit</button>
    </div>
  );
}

export default EmployeeCard;
