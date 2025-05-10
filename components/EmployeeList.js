import React, { useEffect, useState } from 'react';
import api from '../api/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} - {emp.role} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
