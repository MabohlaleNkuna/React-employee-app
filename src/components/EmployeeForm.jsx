import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ selectedEmployee, onSave }) => {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    imageUrl: '',
    startDate: '',
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
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(employee);
    setEmployee({
      name: '',
      surname: '',
      email: '',
      position: '',
      department: '',
      phone: '',
      imageUrl: '',
      startDate: '',
    });
  };

  return (
    <form id="employee-form" onSubmit={handleSubmit}>
      <h2>{selectedEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="surname"
        value={employee.surname}
        onChange={handleChange}
        placeholder="Surname"
        required
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="department"
        value={employee.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <input
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        name="imageUrl"
        value={employee.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="date"
        name="startDate"
        value={employee.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        required
      />
      <button type="submit">{selectedEmployee ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;
