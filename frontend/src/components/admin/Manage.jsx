import React, { useState } from "react";
import Navbar from "./Navbar";
import AddUser from "./popup modal/AddUser";

const Manage = () => {
  const [addUser, setAddUser] = useState(false);
  const addUserHandler = () => {
    setAddUser(true);
    console.log(addUser);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <button onClick={addUserHandler}>Add User</button>
        </div>
        <div>
        {addUser ? 
        <AddUser 
        isOpen = {addUser}
        toggleUserModal = {setAddUser}
        /> : null}
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234</td>
                <td>Arnav</td>
                <td>Manager</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manage;
