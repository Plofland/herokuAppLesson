import './App.css';
import { useState, useEffect } from 'react';

function url(path) {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:1234${path}`
    : path;
}

function App() {
  const [state, setState] = useState('Hello');

  useEffect(() => {
    fetch(url('/api/'))
      .then((res) => res.json())
      .then((apiData) => setState(apiData.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        API Data: {state}
      </header>
    </div>
  );
}

export default App;
