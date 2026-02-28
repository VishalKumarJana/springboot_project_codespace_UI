import React, { useEffect, useState } from "react";
import { EmployeeService } from "../services/EmployeeService";
import { Link } from "react-router-dom";

const ListComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data);
    });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((response) => {
      getAllEmployees();
    });
  };

  return (
    <div className="container">
      <h2 className="text-center">Employee Management</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th className="text-center">S. no.</th>
            <th className="text-center">Employee Id</th>
            <th className="text-center">Employee First Name</th>
            <th className="text-center">Employee Last Name</th>
            <th className="text-center">Employee Email Id</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employees.indexOf(employee) + 1}</td>
              <td>{employee.employeeId}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-employee/${employee.employeeId}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.employeeId)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListComponent;
