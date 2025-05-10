import React, { useEffect, useState } from 'react';
import api from '../api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>{emp.name} — {emp.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
