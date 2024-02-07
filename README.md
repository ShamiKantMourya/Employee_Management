Employee Management System Documentation

Overview
The Employee Management system is a web application designed to facilitate employee management within our company. It provides functionality for administrators to create employees, assign tasks, and monitor task statuses. Employees can securely log in to view their assigned tasks and update task statuses as needed. The system incorporates JWT authentication to ensure secure access for both administrators and employees.

Features

    Administrator Panel
        Employee Management: Administrators can create employees by providing their name and ID.
        Task Assignment: Administrators can assign tasks to employees, specifying the employee name and task details.
        User Management: Administrators have the ability to create users with specific roles within the company.

    Employee Dashboard
        Secure Login: Employees can securely log in to access the system.
        Task View: Employees can view tasks assigned to them.
        Task Status Update: Employees can update the status of tasks assigned to them, facilitating real-time task management.

Technology Stack
    The Employee Management System is built using the following technologies:

    Backend: Node.js and Express.js for server-side logic.
    Database: MongoDB for data storage.
    Authentication: JWT (JSON Web Tokens) for secure authentication.
    Frontend: React.js for the user interface.
    State Management: Redux Toolkit for managing application state.

Usage
    user Authentication
        Users can authenticate by logging in using their credentials.
        For admin to login you need special key provided by company(in this case for test purpose the key is "Shamikant").
        JWT authentication tokens are provided upon successful login and are required for accessing protected routes.

Administrator Functions:
    Employee Management:
        Navigate to the admin panel.
        Click on the "Create Employee" option.
        Enter the employee name and ID and click "Submit" to create the employee.

    Task Assignment:
        Navigate to the admin panel.
        Click on the "Assign Task" option.
        Enter the employee name and task details and click "Assign" to assign the task.

    User Management:
        Navigate to the admin panel.
        Click on the "Create User" option.
        Enter the user details, including username, password, and role, and click "Submit" to create the user.


Employee Functions:

    Task View:
        Log in to the system using valid credentials.
        The dashboard will display the tasks assigned to the logged-in employee.

    Task Status Update:
        Log in to the system using valid credentials.
        Click on the task to view details.
        Update the task status as needed.
