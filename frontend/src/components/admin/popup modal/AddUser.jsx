import React from "react";
import { MdClose } from "react-icons/md";

const AddUser = ({ isOpen, toggleUserModal }) => {
  const closeAddUserModal = () => {
    if (isOpen) {
        toggleUserModal(false);
      }
  };
  return (
    <div>
      <div>
        <button onClick={closeAddUserModal}>
          <MdClose />
        </button>
      </div>
      <input type="text" placeholder="User Name" />
      <input type="text" placeholder="Password" />
      <input type="text" placeholder="User Role" />
      <button>Add Employee</button>
    </div>
  );
};

export default AddUser;
