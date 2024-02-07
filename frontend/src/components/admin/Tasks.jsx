import React, { useState } from "react";
import Navbar from "./Navbar";
import AddTasks from "./popup modal/AddTasks";

const Tasks = () => {
  const [taskModal, setTaskModal] = useState(false);
  const taskModalHandler = () => {
    setTaskModal(true);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <button onClick={taskModalHandler}>Add Tasks</button>
        </div>
        <div>{taskModal ? <AddTasks isOpen={taskModal} toggleTaskModal= {setTaskModal}/> : null}</div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Tasks</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Complete backend</td>
                <td>Arnav</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
