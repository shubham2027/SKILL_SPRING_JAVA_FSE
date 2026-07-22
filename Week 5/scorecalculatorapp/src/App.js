import logo from './logo.svg';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Rahul"
        school="ABC Public School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
