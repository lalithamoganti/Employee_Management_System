# Employee Management System (Spring Boot + React + MySQL)

## Project Description
Employee Management System is a full stack web application developed using Spring Boot (Backend), React + TypeScript (Frontend), and MySQL (Database).
This project helps to manage employee details such as adding, updating, deleting, viewing employees, searching employees by name, and filtering employees by department.

---

## Features
- Add Employee
- View All Employees
- Update Employee Details
- Delete Employee
- Search Employee by Name
- Filter Employees by Department
- Validation and Exception Handling
- Swagger API Documentation

---

## Technologies Used
### Backend:
- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Swagger UI
- Validation

### Frontend:
- React
- TypeScript
- Bootstrap
- Axios
- React Router DOM

### Database:
- MySQL

---

##  Project Structure

### Backend Folder Structure
- controller
- service
- repository
- model
- exception

### Frontend Folder Structure
- components
- pages
- services
- models

---

##  Backend Setup (Spring Boot)

### 1. Create Database
```sql
CREATE DATABASE employee_db;
```
# Configure MySQL in application.properties

Update your MySQL username and password:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

## Run Backend
mvn spring-boot:run

Backend will run on:
http://localhost:8080

Swagger UI:
http://localhost:8080/swagger-ui/index.html

## Frontend Setup (React + TypeScript)

# Go to frontend folder
 cd employee-frontend

 ### Install dependencies
 npm install

## Run frontend
npm run dev

# Frontend will run on:
http://localhost:5173

### API Endpoints

| Method | Endpoint                              | Description          |
| ------ | ------------------------------------- | -------------------- |
| POST   | /api/employees                        | Add employee         |
| GET    | /api/employees                        | Get all employees    |
| GET    | /api/employees/{id}                   | Get employee by ID   |
| PUT    | /api/employees/{id}                   | Update employee      |
| DELETE | /api/employees/{id}                   | Delete employee      |
| GET    | /api/employees/search?name=           | Search employee      |
| GET    | /api/employees/department?department= | Filter by department |

## Conclusion

This Employee Management System project provides an easy way to manage employee records using a web-based interface. It is developed using modern full stack technologies and follows proper layered architecture.

 
