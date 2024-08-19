import React, { useState, useEffect } from 'react';
import HeaderComp from './components/HeaderComp';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import { saveToLocalStorage, loadFromLocalStorage } from './utils/LocalStorage';
import './App.css';

const App = () => {
  const LOCAL_STORAGE_KEY = 'employees';
  
  const [employees, setEmployees] = useState(() => loadFromLocalStorage(LOCAL_STORAGE_KEY) || []);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    saveToLocalStorage(LOCAL_STORAGE_KEY, employees);
  }, [employees]);

  const handleAddOrUpdateEmployee = (employee) => {
    if (employee.id) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === employee.id ? employee : emp
        )
      );
      alert('Employee updated successfully!');
    } else {
      employee.id = new Date().getTime().toString();
      setEmployees((prevEmployees) => [...prevEmployees, employee]);
      alert('Employee added successfully!');
    }
    setSelectedEmployee(null);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
    alert('Employee deleted successfully!');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const calculateDaysAtOrganization = (startDate) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const differenceInTime = currentDate - start;
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
  };

  const filteredEmployees = employees.filter((employee) => {
    const term = searchTerm.toLowerCase();
    const daysAtOrganization = calculateDaysAtOrganization(employee.startDate).toString();
    
    return (
      employee.name.toLowerCase().includes(term) ||
      employee.surname.toLowerCase().includes(term) ||
      employee.idNum.includes(term) ||
      employee.position.includes(term) ||
      employee.department.toLowerCase().includes(term) ||
      daysAtOrganization.includes(term)
    );
  });

  return (
    <div className="app">
      <HeaderComp />
      <SearchBar onSearch={handleSearch} />
      <EmployeeForm
        selectedEmployee={selectedEmployee}
        onSave={handleAddOrUpdateEmployee}
      />
      <EmployeeList
        employees={filteredEmployees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
