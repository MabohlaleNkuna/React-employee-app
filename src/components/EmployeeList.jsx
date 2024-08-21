import React from 'react';
import Button from './Button';
import './Employee.css';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div className="employee" key={employee.id}>
          {employee.imageUrl && (
            <img src={employee.imageUrl} alt="Employee" className="employee-image" />
          )}
          <div className="employee-details">
            <h3>{employee.name} {employee.surname}</h3>
            <p>Email: {employee.email}</p>
            <p>ID Number: {employee.idNum}</p>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <p>Phone: {employee.phone}</p>
            <p>Start Date: {employee.startDate}</p>
            <div className="employee-actions">
              <Button onClick={() => onEdit(employee)}>Edit</Button>
              <Button onClick={() => onDelete(employee.id)}>Delete</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
