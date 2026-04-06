import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Employee Management
        </Link>

        <div>
          <Link className="btn btn-success" to="/add">
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;