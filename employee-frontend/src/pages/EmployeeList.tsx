import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import type { Employee } from "../models/Employee";

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (id: number) => {
    EmployeeService.deleteEmployee(id)
      .then(() => {
        alert("Employee deleted successfully!");
        loadEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    if (searchName.trim() === "") {
      loadEmployees();
      return;
    }

    EmployeeService.searchEmployee(searchName)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Employee List</h2>

      {/* Search Box */}
      <div className="row mb-3">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search employee by name..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Employee Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Joining Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center">
                No Employees Found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.salary}</td>
                <td>{emp.joiningDate}</td>

                <td>
                  <Link
                    to={`/update/${emp.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEmployee(emp.id!)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;