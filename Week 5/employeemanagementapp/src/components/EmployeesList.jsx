import React from 'react';
import EmployeeCard from './EmployeeCard';

// Mock list of employees
const employeesData = [
  { id: 1, name: 'Alice Smith', position: 'Software Engineer', department: 'Engineering' },
  { id: 2, name: 'Bob Jones', position: 'Product Manager', department: 'Product' },
  { id: 3, name: 'Charlie Brown', position: 'UX Designer', department: 'Design' },
];

function EmployeesList() {
  return (
    <div>
      <h3>Employee List</h3>
      <div>
        {employeesData.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default EmployeesList;
