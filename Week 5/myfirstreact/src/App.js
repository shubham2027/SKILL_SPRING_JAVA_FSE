import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CalculateScore from './components/CalculateScore';
import Posts from './components/Posts';
import { CohortDashboard } from './components/CohortDetails';

function App() {
  return (
    <div className="App">
      {/* Exercise 1: Welcome to React */}
      {/* <h1>Welcome to React</h1> */}

      {/* Exercise 2: Home, About, Contact Components */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}

      {/* Exercise 3: CalculateScore Component */}
      {/* <CalculateScore
        Name={"Steave"}
        School={"D.A.V Public School"}
        Total={284}
        goal={300}
      /> */}

      {/* Exercise 4: Posts Component (blogapp) */}
      {/* <Posts /> */}

      {/* Exercise 5: CohortDetails Dashboard */}
      <CohortDashboard />
    </div>
  );
}

export default App;
