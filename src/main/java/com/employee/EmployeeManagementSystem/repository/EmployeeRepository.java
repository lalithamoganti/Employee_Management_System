package com.employee.EmployeeManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.EmployeeManagementSystem.model.Employee;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Search employees by name
    List<Employee> findByNameContainingIgnoreCase(String name);

    // Filter employees by department
    List<Employee> findByDepartmentIgnoreCase(String department);
}