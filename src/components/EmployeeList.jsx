import React from 'react';

const EmployeeList = ({ employees = [], onEdit, onDelete }) => (
  <div className="employee-list">
    {employees.map((employee, index) => (
      <div className="employee" key={index}>
        <p>{employee.name} {employee.surname}</p>
        <p>{employee.position}</p>
        <button onClick={() => onEdit(employee)}>Edit</button>
        <button onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default EmployeeList;
