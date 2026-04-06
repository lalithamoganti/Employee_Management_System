import axios from "axios";
import type { Employee } from "../models/Employee";
const BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {

  getAllEmployees() {
    return axios.get<Employee[]>(BASE_URL);
  }

  getEmployeeById(id: number) {
    return axios.get<Employee>(`${BASE_URL}/${id}`);
  }
   
  addEmployee(employee: Employee) {
    return axios.post<Employee>(BASE_URL, employee);
  }

  updateEmployee(id: number, employee: Employee) {
    return axios.put<Employee>(`${BASE_URL}/${id}`, employee);
  }

  deleteEmployee(id: number) {
    return axios.delete(`${BASE_URL}/${id}`);
  }

  searchEmployee(name: string) {
    return axios.get<Employee[]>(`${BASE_URL}/search?name=${name}`);
  }

  filterByDepartment(department: string) {
    return axios.get<Employee[]>(`${BASE_URL}/department?department=${department}`);
  }
}

export default new EmployeeService();