import React from 'react';
import "./App.css";
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu className="item header" />
      <main className="item main">main</main>
      <aside className="item aside">aside</aside>
    </div>
  );
}

export default App;
