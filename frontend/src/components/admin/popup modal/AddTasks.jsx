import React from "react";
import { MdClose } from "react-icons/md";

const AddTasks = ({ isOpen, toggleTaskModal }) => {
  const closeTaskHandler = () => {
    if (isOpen) {
      toggleTaskModal(false);
    }
  };
  return (
    <div>
      <div>
        <button onClick={closeTaskHandler}>
          <MdClose />
        </button>
      </div>
      <div>
        <input type="text" placeholder="Employee Name" />
        <input type="text" placeholder="Task" />
        <button>Add Task</button>
      </div>
    </div>
  );
};

export default AddTasks;
