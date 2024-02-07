import React from "react";
import { MdClose } from "react-icons/md";

const AddEmployee = ({ isOpen, toggleModal }) => {
  const closeAddEMployeeModal = () => {
    if (isOpen) {
      toggleModal(false);
    }
  };
  return (
    <div>
      <div>
        <button onClick={closeAddEMployeeModal}>
          <MdClose />
        </button>
      </div>
      <input type="text" placeholder="Employee Name" />
      <input type="text" placeholder="Employee Id" />
      <button>Add Employee</button>
    </div>
  );
};

export default AddEmployee;
