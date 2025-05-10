import React from 'react';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <h1>Company Management System</h1>
      <Register />
      <Login />
      <EmployeeList />
    </div>
  );
}

export default App;
