import React, { useState, useEffect } from 'react';
import './Employee.css';
import Button from './Button'; 
import TextInput from './TextInput'; 
import SelectInput from './SelectInput';
import FileInput from './FileInput'; 

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
  const [phoneError, setPhoneError] = useState('');
  const [dateError, setDateError] = useState('');
  const [storageError, setStorageError] = useState('');

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'idNum' && !/^\d*$/.test(value)) {
      setIdError('ID number must be numeric');
    } else if (name === 'idNum' && value.length > 13) {
      setIdError('ID number must be up to 13 characters long');
    } else {
      setIdError('');
    }

    if (name === 'phone') {
      if (!/^\d*$/.test(value)) {
        setPhoneError('Phone number cannot contain letters or special characters');
      } else {
        setPhoneError('');
      }
    }

    if (name === 'startDate') {
      const today = new Date();
      const selectedDate = new Date(value);
      if (selectedDate > today) {
        setDateError('Start date cannot be in the future');
      } else {
        setDateError('');
      }
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

    if (idError || phoneError || dateError) {
      alert(idError || phoneError || dateError);
      return;
    }

    try {
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
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        setStorageError('Local storage limit exceeded. Please clear some space.');
      }
    }
  };

  return (
    <form id="employee-form" onSubmit={handleSubmit} className="employee-form">
      <h2>{selectedEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
      <TextInput
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <TextInput
        name="surname"
        value={employee.surname}
        onChange={handleChange}
        placeholder="Surname"
        required
      />
      <TextInput
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <TextInput
        name="idNum"
        value={employee.idNum}
        onChange={handleChange}
        placeholder="ID Number"
        required
      />
      {idError && <p className="error-message">{idError}</p>}
      <TextInput
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <SelectInput
        name="department"
        value={employee.department}
        onChange={handleChange}
        options={[
          { value: 'HR', label: 'HR' },
          { value: 'Information-technology', label: 'Information Technology' },
          { value: 'Engineering', label: 'Engineering' },
          { value: 'Marketing', label: 'Marketing' },
          { value: 'Sales', label: 'Sales' },
        ]}
        required
      />
      <TextInput
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        pattern="\d*"
        title="Phone number cannot contain letters or special characters"
      />
      {phoneError && <p className="error-message">{phoneError}</p>}
      <FileInput
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
        min="1900-01-01"
      />
      {dateError && <p className="error-message">{dateError}</p>}
      <Button type="submit">{selectedEmployee ? 'Update' : 'Add'} Employee</Button>
      {storageError && <p className="error-message">{storageError}</p>}
    </form>
  );
};

export default EmployeeForm;
