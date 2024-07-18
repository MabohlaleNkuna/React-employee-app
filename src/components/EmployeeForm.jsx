import React, { useState, useEffect } from 'react';
import './Employee.css';

const EmployeeForm = ({ selectedEmployee, onSave }) => {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    idNum: '',
    position: '',
    department: '',
    phone: '',
    imageUrl: '',
    startDate: '',
  });

  const [idError, setIdError] = useState('');

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'idNum' && value.length > 13) {
      setIdError('ID number must be exactly 13 characters long');
      return;
    } else {
      setIdError('');
    }

    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmployee((prevEmployee) => ({
          ...prevEmployee,
          imageUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.idNum.length !== 13) {
      setIdError('ID number must be exactly 13 characters long');
      return;
    }

    onSave(employee);
    setEmployee({
      name: '',
      surname: '',
      email: '',
      idNum: '',
      position: '',
      department: '',
      phone: '',
      imageUrl: '',
      startDate: '',
    });
  };

  return (
    <form id="employee-form" onSubmit={handleSubmit} className="employee-form">
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
        name="idNum"
        value={employee.idNum}
        onChange={handleChange}
        placeholder="ID Number"
        required
      />
      {idError && <p className="error-message">{idError}</p>}
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <select
      type="text"
        name="department"
        value={employee.department}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select Department</option>
        <option value="HR">HR</option>
        <option value="Information-technology">Information Technology</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>
      <input
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      {employee.imageUrl && (
        <img src={employee.imageUrl} alt="Employee" className="image-preview" />
      )}
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
