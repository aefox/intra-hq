import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <div className="App-nav">
            <span className="App-link">
              <Link to="/candidates">Candidates</Link>
            </span>
            <span className="App-link">
              <Link to="/employees-history">EmployeesHistory</Link>
            </span>
            <span className="App-link">
              <Link to="/employees-homepage">EmployeesHomepage</Link>
            </span>
            <span className="App-link">
              <Link to="/positions">Positions</Link>
            </span>
            <span className="App-link">
              <Link to="/recruitment-dashboard">RecruitmentDashboard</Link>
            </span>
            <span className="App-link">
              <Link to="/take-test">TakeTest</Link>
            </span>
            <span className="App-link">
              <Link to="/training-paths">TrainingPaths</Link>
            </span>
            <span className="App-link">
              <Link to="/test-definition">Test definition</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
