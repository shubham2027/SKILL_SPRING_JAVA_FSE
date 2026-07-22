import React from 'react';
import './App.css';
import sr from './office.png';

function App() {
  const element = "Office Space";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  // Create a list of Object to display more data
  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Smartworks", Rent: 65000, Address: "Bangalore" },
    { Name: "WeWork", Rent: 75000, Address: "Mumbai" },
    { Name: "Regus", Rent: 45000, Address: "Delhi" }
  ];

  // To apply Css, loop through the office space item and push color classes
  let colors = [];
  officeSpaces.forEach((item) => {
    if (item.Rent <= 60000) {
      colors.push('textRed');
    } else {
      colors.push('textGreen');
    }
  });

  // Determine color for the single ItemName object as per hint logic
  let singleItemColor;
  if (ItemName.Rent <= 60000) {
    singleItemColor = 'textRed';
  } else {
    singleItemColor = 'textGreen';
  }

  return (
    <div>
      {/* Create an element to display the heading of the page */}
      <h1>{element} , at Affordable Range </h1>
      
      {/* Attribute to display the image of the office space */}
      {jsxatt}
      
      {/* Create an object of office to display the details like Name, Rent and Address */}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={singleItemColor}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />
      
      <h2>More Office Spaces:</h2>
      {/* Loop through the office space item to display more data */}
      {officeSpaces.map((office, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h1>Name: {office.Name}</h1>
          <h3 className={colors[index]}>Rent: Rs. {office.Rent}</h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;

