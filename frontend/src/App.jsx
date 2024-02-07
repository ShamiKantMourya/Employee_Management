import { useRoutes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Employee from "./components/admin/Employee";
import Tasks from "./components/admin/Tasks";
import Manage from "./components/admin/Manage";
import Dashboard from "./components/user/Dashboard";

function App() {
  let element = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    {
      path: "/admin/employee",
      element: <Employee />,
    },
    {
      path: "/admin/tasks",
      element: <Tasks />,
    },
    {
      path: "/admin/manage",
      element: <Manage/>
    },
    {
      path: "/user/dashboard",
      element: <Dashboard />
    }
  ]);
  return element;
}

export default App;
