import React, { Component } from 'react';
import './CountPeople.css';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    
    // Bind methods to ensure correct 'this' context
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  // Method to increment and display number of people who entered
  UpdateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  // Method to increment and display number of people who exited
  UpdateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div className="counter-app-container">
        <div className="glass-card">
          <header className="card-header">
            <span className="badge">LIVE TRACKING</span>
            <h1 className="main-title">Mall Visitor Counter</h1>
            <p className="description">Manage and monitor crowd capacity in real-time</p>
          </header>

          <div className="dashboard-grid">
            {/* Entry Box */}
            <div className="stat-card entry-card">
              <div className="card-icon-container">
                <span className="material-icons-round icon-entry">login</span>
              </div>
              <h2 className="stat-label">People Entered</h2>
              <div className="stat-value">{this.state.entrycount}</div>
              <button 
                className="action-btn btn-login" 
                onClick={this.UpdateEntry}
                aria-label="Increment entry count"
              >
                Login
              </button>
            </div>

            {/* Exit Box */}
            <div className="stat-card exit-card">
              <div className="card-icon-container">
                <span className="material-icons-round icon-exit">logout</span>
              </div>
              <h2 className="stat-label">People Exited</h2>
              <div className="stat-value">{this.state.exitcount}</div>
              <button 
                className="action-btn btn-exit" 
                onClick={this.UpdateExit}
                aria-label="Increment exit count"
              >
                Exit
              </button>
            </div>
          </div>

          {/* Occupancy Indicator */}
          <footer className="occupancy-section">
            <div className="occupancy-meta">
              <span className="occupancy-label">Current Inside Mall</span>
              <span className="occupancy-status">
                {this.state.entrycount - this.state.exitcount > 50 ? '⚠️ High Traffic' : '🟢 Safe Capacity'}
              </span>
            </div>
            <div className="occupancy-display">
              <span className="occupancy-number">
                {Math.max(0, this.state.entrycount - this.state.exitcount)}
              </span>
              <span className="occupancy-unit">people</span>
            </div>
            
            {/* Progress bar representing current occupancy */}
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill"
                style={{ 
                  width: `${Math.min(100, Math.max(0, (this.state.entrycount - this.state.exitcount) * 5))}%` 
                }}
              />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default CountPeople;
