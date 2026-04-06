package com.employee.EmployeeManagementSystem.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.employee.EmployeeManagementSystem.model.Employee;
import com.employee.EmployeeManagementSystem.service.EmployeeService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173") // React frontend
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // Add Employee
    @PostMapping
    public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee employee) {
    return ResponseEntity.ok(employeeService.addEmployee(employee));
     }
    // Get All Employees
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

    // Get Employee By ID
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        return ResponseEntity.ok(employeeService.getEmployeeById(id));
    }

    // Update Employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @Valid @RequestBody Employee employee) {
    return ResponseEntity.ok(employeeService.updateEmployee(id, employee));
    }

    // Delete Employee
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully with id: " + id);
    }

    // Search Employee by Name
    @GetMapping("/search")
    public ResponseEntity<List<Employee>> searchEmployees(@RequestParam String name) {
        return ResponseEntity.ok(employeeService.searchEmployeesByName(name));
    }

    // Filter Employee by Department
    @GetMapping("/department")
    public ResponseEntity<List<Employee>> getEmployeesByDepartment(@RequestParam String department) {
        return ResponseEntity.ok(employeeService.getEmployeesByDepartment(department));
    }
}