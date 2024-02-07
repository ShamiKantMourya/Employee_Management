import React from "react";

import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <button>Add Task</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Your Tasks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Create Backend</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
