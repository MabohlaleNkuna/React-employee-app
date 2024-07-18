import React, { useState, useEffect } from 'react';
import HeaderComp from './components/HeaderComp';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import './App.css'

const App = () => {
  // State to manage employees, selected employee, and search query
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load employees from localStorage when the component mounts


  // Handle adding or updating an employee
  const handleAddOrUpdateEmployee = (employee) => {
    if (employee.id) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === employee.id ? employee : emp
        )
      );
    } else {
      employee.id = new Date().getTime().toString();
      setEmployees((prevEmployees) => [...prevEmployees, employee]);
    }
    setSelectedEmployee(null); // Reset selected employee after saving
  };

  // Handle selecting an employee for editing
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  // Handle deleting an employee
  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  // Handle searching employees based on user input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.surname}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

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
