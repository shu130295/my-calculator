import React from 'react';
import './App.css';
import { Calculator } from './Calculator/Calculator';
import { Navigation } from './Navigation/Navigation';
import { Sidebar } from './Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Calculator />
      <Sidebar />
    </div>
  );
}

export default App;
