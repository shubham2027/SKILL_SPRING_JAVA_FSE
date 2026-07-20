import React from 'react';
import './App.css';

// Component for Shopping App (OnlineShopping)
import OnlineShopping from './components/OnlineShopping';

// Imports from previous exercises
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import CalculateScore from './components/CalculateScore';
// import Posts from './components/Posts';
// import { CohortDashboard } from './components/CohortDetails';
// import TrainersList from './components/Trainerlist';
// import TrainerDetail from './components/TrainerDetails';
// import trainers from './TrainersMock';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
      {/* <CohortDashboard /> */}

      {/* Exercise 6: TrainersApp SPA Navigation and Routes */}
      {/* <BrowserRouter>
        <nav style={{ padding: '15px 20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '20px', fontWeight: 'bold', textDecoration: 'none', color: '#0066cc' }}>Home</Link>
          <Link to="/trainers" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#0066cc' }}>Trainers List</Link>
        </nav>

        <div style={{ padding: '0 20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList trainersData={trainers} />} />
            <Route path="/trainers/:id" element={<TrainerDetail />} />
          </Routes>
        </div>
      </BrowserRouter> */}

      {/* Exercise 7: Shopping App (OnlineShopping & Cart) */}
      <OnlineShopping />
    </div>
  );
}

export default App;
