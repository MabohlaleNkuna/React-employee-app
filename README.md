# React Employee Management App

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The **React Employee Management App** is a user-friendly application designed to manage employee records efficiently. It allows users to add, edit, delete, and search for employee details, enhancing organizational productivity and data management.

## Features
- **Add New Employees**: Users can input and save employee details such as name, surname, email, ID number, position, department, phone number, and start date.
- **Edit Existing Employees**: Employees can be updated with new information.
- **Delete Employees**: Remove employees from the list.
- **Search Functionality**: Search for employees based on various criteria like name, ID number, and position.
- **Local Storage**: Employee data is stored in the browser's local storage for persistence.

## Technologies Used
- **React.js**: For building the user interface.
- **CSS**: For styling the application.
- **Local Storage**: To save and load employee data.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/MabohlaleNkuna/React-employee-app.git
   cd react-employee-app

2. Install dependencies
     npm install

3. Start the development server
    npm start

4. Open your browser and navigate to http://localhost:3000

## Usage
-Launch the application and you will see the header and an empty employee list.
-Use the Add Employee form to input new employee details.
-After filling out the form, click on the Add Employee button to save the information.
-To edit an employee, click the Edit button next to the employee's name in the list.
-To delete an employee, click the Delete button next to the corresponding employee.
-Use the Search Bar to filter employees based on the search term.

## File Structure
react-employee-app/
├── src/
│   ├── components/
│   │   ├── HeaderComp.js       # Header component
│   │   ├── EmployeeList.js     # List of employees
│   │   └── EmployeeForm.js     # Form for adding/editing employees
│   ├── utils/
│   │   └── LocalStorage.js      # Utility functions for local storage
│   ├── App.js                   # Main application component
│   └── App.css                  # Styling for the application
├── public/
│   └── index.html               # HTML template
├── package.json                  # Project metadata and dependencies
└── README.md                    # Project documentation