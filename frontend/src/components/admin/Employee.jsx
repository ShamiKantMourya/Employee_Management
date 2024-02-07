import React, { useState } from "react";

import Navbar from "./Navbar";
import AddEmployee from "./popup modal/AddEmployee";

const Employee = () => {
  const [addEmployee, setAddEmployee] = useState(false);
  const addEmployeeHandler = () => {
    setAddEmployee(true);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div>{addEmployee ? 
        <AddEmployee 
        isOpen ={addEmployee}
        toggleModal= {setAddEmployee}
        /> : null}
        </div>
        <div>
          <button onClick={addEmployeeHandler}>Add Employee</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Username</th>
                <th>Tasks</th>
              </tr>
            </thead>
            <tbody>
              {/* {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.userId}</td>
                  <td>{user.username}</td>
                  <td>{user.task}</td>
                </tr>
              ))} */}
              <tr>
                <td>1234</td>
                <td>user name</td>
                <td>user tasks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
