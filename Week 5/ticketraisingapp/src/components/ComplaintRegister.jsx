import React, { Component } from 'react';
import './ComplaintRegister.css';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: Math.floor(Math.random() * 100) + 1 // Generates a random reference number
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var msg = 'Thanks ' + this.state.ename + '\n Your Complaint was Submitted.\nTransaction ID is: ' + this.state.NumberHolder;
    alert(msg);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2 className="register-heading">Register your complaints here!!!</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="ename-input" style={{ display: 'inline-block', width: '90px' }}>Name: </label>
            <input
              id="ename-input"
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
            <label htmlFor="complaint-input" style={{ display: 'inline-block', width: '90px', marginTop: '5px' }}>Complaint: </label>
            <textarea
              id="complaint-input"
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows="3"
              cols="22"
              required
            />
          </div>
          <button type="submit" style={{ marginLeft: '130px', padding: '3px 10px' }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
