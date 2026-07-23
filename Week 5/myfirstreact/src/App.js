import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    GitClient.getRepositories('techiesyed')
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>GitHub Repositories for techiesyed</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
