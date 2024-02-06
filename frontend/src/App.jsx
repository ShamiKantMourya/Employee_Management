import { useRoutes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  let element = useRoutes([
    {path: "/", element: <Login/>},
    {path: "/signup", element: <SignUp />}
  ]);
  return element;
}

export default App;
