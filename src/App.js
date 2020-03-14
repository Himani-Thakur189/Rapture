import React from 'react';
import First from './components/First'
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <First />
      </Router>
    </div>
  );
}
export default App;
