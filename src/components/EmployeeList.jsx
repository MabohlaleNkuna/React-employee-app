import React, { useState } from 'react';
import Button from './Button';
import './Employee.css';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseDetails = () => {
    setSelectedEmployee(null);
  };

  const handleEdit = (employee) => {
    handleCloseDetails(); // Close the details modal
    onEdit(employee); // Open the edit form
  };

  return (
    <div className="employee-list">
      {/* Show the table only if there are employees */}
      {employees.length > 0 && (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name} {employee.surname}</td>
                <td>{employee.id}</td>
                <td>{employee.department}</td>
                <td>
                  <Button onClick={() => handleViewDetails(employee)} className="custom-button">View Details</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
  
      {/* Modal for showing full employee details */}
      {selectedEmployee && (
        <div className="employee-details-modal">
          <h3>{selectedEmployee.name} {selectedEmployee.surname}</h3>
          {selectedEmployee.imageUrl && (
            <img src={selectedEmployee.imageUrl} alt="Employee" className="employee-image" />
          )}
          <p>Email: {selectedEmployee.email}</p>
          <p>ID Number: {selectedEmployee.idNum}</p>
          <p>Position: {selectedEmployee.position}</p>
          <p>Department: {selectedEmployee.department}</p>
          <p>Phone: {selectedEmployee.phone}</p>
          <p>Start Date: {selectedEmployee.startDate}</p>
          <div className="employee-actions">
            <Button onClick={() => handleEdit(selectedEmployee)} className="custom-button">Edit</Button>
            <Button onClick={() => onDelete(selectedEmployee.id)} className="custom-button">Delete</Button>
            <Button onClick={handleCloseDetails} className="custom-button">Close</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
