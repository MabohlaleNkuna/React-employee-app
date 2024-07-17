// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ selectedEmployee, onSave }) => {
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    surname: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    imageUrl: '',
    startDate: ''
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(employee);
    setEmployee({
      id: '',
      name: '',
      surname: '',
      email: '',
      position: '',
      department: '',
      phone: '',
      imageUrl: '',
      startDate: ''
    });
  };

  const inputFields = [
    { type: 'text', name: 'name', placeholder: 'Name' },
    { type: 'text', name: 'surname', placeholder: 'Surname' },
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'text', name: 'position', placeholder: 'Position' },
    { type: 'text', name: 'department', placeholder: 'Department' },
    { type: 'tel', name: 'phone', placeholder: 'Phone' },
    { type: 'url', name: 'imageUrl', placeholder: 'Image URL' },
    { type: 'date', name: 'startDate', placeholder: 'Start Date' }
  ];

  const inputElements = [];
  for (let i = 0; i < inputFields.length; i++) {
    const field = inputFields[i];
    inputElements.push(
      <input
        key={field.name}
        type={field.type}
        name={field.name}
        value={employee[field.name]}
        onChange={handleChange}
        placeholder={field.placeholder}
      />
    );
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      {inputElements}
      <button type="submit">Save Employee</button>
    </form>
  );
};

export default EmployeeForm;
