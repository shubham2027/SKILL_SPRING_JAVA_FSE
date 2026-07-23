import React, { useState } from 'react';
import './App.css';

// Mock flight details
const flights = [
  { id: 1, number: 'AI-101', destination: 'Delhi to Mumbai', time: '10:00 AM' },
  { id: 2, number: '6E-202', destination: 'Bangalore to Chennai', time: '02:30 PM' },
  { id: 3, number: 'SG-303', destination: 'Kolkata to Hyderabad', time: '06:15 PM' },
];

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting() {
  const [selectedFlight, setSelectedFlight] = useState(flights[0].number);
  const [tickets, setTickets] = useState(1);

  const handleBook = (e) => {
    e.preventDefault();
    alert(`Successfully booked ${tickets} ticket(s) for flight: ${selectedFlight}`);
  };

  return (
    <div>
      <h2>User Page</h2>
      <h3>Flight Details (Available Flights)</h3>
      <ul>
        {flights.map(f => (
          <li key={f.id}>
            {f.number} - {f.destination} at {f.time}
          </li>
        ))}
      </ul>
      <br />
      <h3>Book Flights</h3>
      <form onSubmit={handleBook}>
        <div>
          <label>Flight Name: </label>
          <select value={selectedFlight} onChange={(e) => setSelectedFlight(e.target.value)}>
            {flights.map(f => (
              <option key={f.id} value={f.number}>{f.number} ({f.destination})</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label>Number of tickets: </label>
          <input 
            type="number" 
            min="1" 
            value={tickets} 
            onChange={(e) => setTickets(parseInt(e.target.value) || 1)} 
          />
        </div>
        <br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h2>Guest Page</h2>
      <h3>Flight Details (Available Flights)</h3>
      <ul>
        {flights.map(f => (
          <li key={f.id}>
            {f.number} - {f.destination} at {f.time}
          </li>
        ))}
      </ul>
      <p style={{ color: 'red' }}>Please Login to book tickets</p>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      <hr />
      <br />
      {button}
      <br />
      <br />
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
