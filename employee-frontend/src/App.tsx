import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import EmployeeList from "./pages/EmployeeList.tsx";
import AddEmployee from "./pages/AddEmployee.tsx";
import UpdateEmployee from "./pages/UpdateEmployee.tsx";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;