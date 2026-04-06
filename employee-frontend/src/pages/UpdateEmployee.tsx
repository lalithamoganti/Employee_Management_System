import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import type { Employee } from "../models/Employee";

function UpdateEmployee() {
  const { id } = useParams();
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

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(Number(id))
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Employee not found!");
        });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    EmployeeService.updateEmployee(Number(id), employee)
      .then(() => {
        alert("Employee updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Error updating employee");
      });
  };

  return (
    <div className="card p-4 shadow">
      <h2 className="text-center mb-4">Update Employee</h2>

      <form onSubmit={updateEmployee}>
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

        <button type="submit" className="btn btn-warning w-100">
          Update Employee
        </button>
      </form>
    </div>
  );
}

export default UpdateEmployee;