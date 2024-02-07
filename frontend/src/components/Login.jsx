import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import { loginAdmin } from "../actions/adminAction";

const Login = () => {
  const [person, setPerson] = useState("User");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [adminname, setAdminName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeLoginField = (event) => {
    setPerson(event.target.value);
  };
  const loginHandler = async () => {
    if (person === "User") {
      await dispatch(loginUser(userName, userPassword));
    } else {
      await dispatch(loginAdmin(adminname, password, adminKey));
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <input
          type="radio"
          name="select"
          value="User"
          onChange={changeLoginField}
        />
        User
        <input
          type="radio"
          name="select"
          value="Admin"
          onChange={changeLoginField}
        />
        Admin
      </div>
      {person === "User" ? (
        <div>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="password"
            placeholder="User Password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
          <button onClick={loginHandler}>Login</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Admin Name"
            value={adminname}
            onChange={(event) => setAdminName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Admin Key"
            value={adminKey}
            onChange={(event) => setAdminKey(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={loginHandler}>Login</button>
          <p>
            Don't have an admin account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
