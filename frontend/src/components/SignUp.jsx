import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [adminKey, setAdminKey] = useState("");
  const [adminname, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerAdmin = () => {};
  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Admin Key"
        value={adminKey}
        onChange={(event) => setAdminKey(event.target.value)}
      />
      <input
        type="text"
        placeholder="Admin Name"
        value={adminname}
        onChange={(event) => setAdminName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={registerAdmin}>Register</button>
      <p>
        already have an account? <Link to="/">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
