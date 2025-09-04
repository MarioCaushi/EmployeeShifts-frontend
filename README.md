# EmployeeShift Frontend

![React](https://img.shields.io/badge/React.js-Frontend-blue?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Frontend-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Frontend-blue?logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-Styling-7952B3?logo=bootstrap&logoColor=white)

Welcome to the frontend repository for EmployeeShift, a dynamic web application built with ReactJS, designed to manage employee shifts effortlessly. This application interfaces easily with a .NET backend via Axios for API calls, enhancing real-time data interaction and management.

## Features

- **React Router**: Utilized for enhanced navigation and routing throughout the application.
  
- **Axios**: Employed for API requests, ensuring efficient and manageable asynchronous HTTP requests.
  
- **Proxy Configuration**: Modify the `proxy` setting in `package.json` to redirect API requests to the correct server, allowing for secure HTTPS URLs.
  
- **Local Storage and Prompts**: Used for minor state management tasks like storing user IDs and other session-related data.

## Project Structure

The source code is organized into two main directories within the `src` folder:
- **components**: Contains reusable components used across different parts of the application.
- **pages**: Houses the logic and layout for entire pages, ensuring a clean separation of concerns.

## Key Sections and Functionality

- **Home Page**: Welcoming page that explains further steps.

- **Employee Login**: Employees can log in directly from the main page using their employee ID to access their personal shift information.
  
- **Employee Shift Register**: Employees can record their arrival and departure times, with the system verifying the accuracy of the timing against the scheduled shifts.
  
- **Work Status Overview**: For employees currently logged in, the interface displays the duration of the current work session with options to sign off or update their status.
  
- **Manager Login**: Securely log in to access the system and manage employee information and schedules.
  
- **Manager Home - Personal Details**: View personal information of the manager using the application.
  
- **Manager Edit Personal Info**: Edit personal information of the manager using the application.
  
- **Add Employee**: Enables managers to add new employees, specifying details such as workdays, shifts, and wage information, along with generating unique employee IDs.
  
- **Insights**: View all events related to employees such as when they have left work, were they late or not, etc.
  
- **View Employees**: View all employees and search if needed, with additional functionality to view details, edit or delete employees.
  
- **View Details of a Specific Employee**
  
- **Edit Details of a Specific Employee**
  
- **Delete Employee**

## Getting Started

Follow these steps to get a local copy up and running:

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install necessary packages:
4. Modify the `proxy` in `package.json` to the appropriate backend server URL.
5. Start the development server:
6. Open your browser and navigate to `http://localhost:3000` or where it is specified after starting the development server to see the application running.

## Contributing

Contributions make the open-source community thrive. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Backend

Further details about the database and instances of the applications can be found in the backend section of this repository.

## Contact

Mario Caushi – [caushimario321@gmail.com](mailto:caushimario321@gmail.com)

Project Link: [https://github.com/MarioCaushi/EmployeeShifts-frontend](https://github.com/MarioCaushi/EmployeeShifts-frontend)

## Photos of the Application

- Home Page

<img width="874" alt="Home Page" src="https://github.com/user-attachments/assets/8cad64e9-e640-4d63-8327-c6370ef5c29b" />


- Employee Login

<img width="1510" alt="Employee Login" src="https://github.com/user-attachments/assets/857a44a1-8e40-4bc1-aecd-9e6e073ce19b" />


- Employee Registration for shift and status checking

<img width="1510" alt="Employee Login" src="https://github.com/user-attachments/assets/a3c072ce-b00b-4ef8-8f10-5aa61436415a" />


- Manager Login

<img width="1510" alt="Manager Login" src="https://github.com/user-attachments/assets/4cf2309a-4289-4c64-9944-267fb6c76dbe" />

- Manager Personal Info

<img width="1510" alt="Screenshot 2025-01-03 at 21 30 03" src="https://github.com/user-attachments/assets/b7fe3be3-5157-4d2b-8458-7840c3d40d8d" />

- Manager Edit Personal Info

<img width="1510" alt="Screenshot 2025-01-03 at 21 30 19" src="https://github.com/user-attachments/assets/687b696c-cf53-4126-92d1-f210cdee624b" />

- View All Employees

<img width="1510" alt="Screenshot 2025-01-03 at 21 30 27" src="https://github.com/user-attachments/assets/957157ac-a448-4fec-b5aa-15344033f817" />

- Add Employees

<img width="1510" alt="Screenshot 2025-01-03 at 21 30 35" src="https://github.com/user-attachments/assets/d3921fe4-9824-455f-9470-bf9de7fcc01b" />

- Insigts
<img width="1510" alt="Screenshot 2025-01-03 at 21 30 48" src="https://github.com/user-attachments/assets/6dc9c01b-c3fa-4b48-8a62-3d4c53bb0732" />

- All Events in Insights
<img width="1510" alt="Screenshot 2025-01-03 at 21 30 58" src="https://github.com/user-attachments/assets/afb3f8ab-7bae-4b80-92ac-169d74f7175c" />

-View Employee Personal Info

<img width="1510" alt="Screenshot 2025-01-03 at 21 31 11" src="https://github.com/user-attachments/assets/a123fd38-acdd-4983-8b63-9e3d09de5dbd" />

- Edit Employee Personal Info
  
<img width="1510" alt="Screenshot 2025-01-03 at 21 31 16" src="https://github.com/user-attachments/assets/43273e2e-14b5-465f-800e-5b9ee6ef6a41" />





