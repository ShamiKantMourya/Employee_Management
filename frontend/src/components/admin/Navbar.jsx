import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    {
      id: "1",
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      id: "2",
      name: "Employee",
      link: "/admin/employee",
    },
    {
      id: "3",
      name: "Tasks",
      link: "/admin/tasks",
    },
    {
      id: "4",
      name: "Manage",
      link: "/admin/manage",
    },
  ];
  return (
    <div>
      <div>
      <h2>Admin Panel</h2>
      </div>
      <div>
        {navlinks?.map((link) => (
          <ul key={link.id}>
            <Link to={link.link}>{link.name}</Link>
          </ul>
        ))}
      </div>
      <button>Logout</button>
    </div>
  );
};

export default Navbar;
