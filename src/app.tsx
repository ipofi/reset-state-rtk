import React from 'react';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>Add some amount and then Logout to clear Redux Store's state</p>
      </header>
    </div>
  );
}

export default App;
