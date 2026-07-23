import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      alert("Full Name must be 5 characters long!");
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert("Email is not valid!");
      return;
    }

    if (password.length < 8) {
      alert("Password must be 8 characters long!");
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'flex-start', paddingTop: '50px', backgroundColor: '#fff', color: '#000', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'red', margin: '20px 0', fontSize: '36px', fontWeight: 'bold' }}>Register Here!!!</h1>
      
      <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px', fontSize: '16px' }}>Name: </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={{ width: '180px', padding: '2px 4px', border: '1px solid #767676' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px', fontSize: '16px' }}>Email: </label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            style={{ width: '180px', padding: '2px 4px', border: '1px solid #767676' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px', fontSize: '16px' }}>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: '180px', padding: '2px 4px', border: '1px solid #767676' }}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <button type="submit" style={{ padding: '2px 10px', fontSize: '14px', cursor: 'pointer' }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
