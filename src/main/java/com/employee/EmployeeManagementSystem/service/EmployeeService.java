package com.employee.EmployeeManagementSystem.service;

import java.util.List;
import com.employee.EmployeeManagementSystem.model.Employee;

public interface EmployeeService {

    Employee addEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);

    void deleteEmployee(Long id);

    List<Employee> searchEmployeesByName(String name);

    List<Employee> getEmployeesByDepartment(String department);
}