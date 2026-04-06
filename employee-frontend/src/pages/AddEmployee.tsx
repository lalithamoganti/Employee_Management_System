import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import type { Employee } from "../models/Employee";

function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee>({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: 0,
    joiningDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = (e: React.FormEvent) => {
    e.preventDefault();

    EmployeeService.addEmployee(employee)
      .then(() => {
        alert("Employee added successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding employee");
      });
  };

  return (
    <div className="card p-4 shadow">
      <h2 className="text-center mb-4">Add Employee</h2>

      <form onSubmit={saveEmployee}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={employee.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            className="form-control"
            value={employee.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            className="form-control"
            value={employee.salary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            className="form-control"
            value={employee.joiningDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Save Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;