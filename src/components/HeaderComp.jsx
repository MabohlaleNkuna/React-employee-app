import React from 'react';

const HeaderComp = ({ onShowNotifications }) => (
  <header className="header">
    <h1>Employee Management System</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#employees">Employees</a>
      <a href="#add-employee">Add Employee</a>
      {/* Notifications Button */}
      <button onClick={onShowNotifications} className="notifications-button">
        Show Notifications
      </button>
    </nav>
  </header>
);

export default HeaderComp;
