import React from 'react';
import HelloWorld from './HelloWorld'; // From Task 1
import ClickCounter from './ClickCounter'; // From Task 2
import ItemList from './ItemList'; // From Task 3
import UserForm from './UserForm'; // From Task 4

import './App.css'; // Assuming you have this for global styling

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>My React Tasks Dashboard</h1>
      </header>
      
      {/* Task 1: Hello World Component */}
      <HelloWorld /> 

      {/* Task 2: Click Counter Component */}
      <ClickCounter />

      {/* Task 3: Item List Component */}
      <ItemList />

      {/* Task 4: User Form Component */}
      <UserForm />

    </div>
  );
}

export default App;