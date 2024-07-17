import React, { useState, useEffect } from 'react';
import HeaderComp from './components/HeaderComp';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import Notifications from './components/Notifications';

const App = () => {
  // State to manage employees, selected employee, notifications, and search query
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [notification, setNotification] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Load employees from localStorage when the component mounts
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  // Save employees to localStorage whenever employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Handle adding or updating an employee
  const handleAddOrUpdateEmployee = (employee) => {
    if (employee.id) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === employee.id ? employee : emp
        )
      );
      setNotification('Employee updated successfully!');
    } else {
      employee.id = new Date().getTime().toString();
      setEmployees((prevEmployees) => [...prevEmployees, employee]);
      setNotification('Employee added successfully!');
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
    setNotification('Employee deleted successfully!');
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
    {notification && <Notifications message={notification} />}
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
