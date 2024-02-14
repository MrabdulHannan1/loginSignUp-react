import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing

export default function Login() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    console.log(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setname(e.target.value);
    setPassword(e.target.value);
    console.log(name);
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="name"
            onChange={handleChange}
            value={name}
          />
        </div>

        <div>
          <label htmlFor="username">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            onChange={handleChange}
          />
        </div>
        <p>
          dont have account?<Link to="./signup">signup</Link>
        </p>
        <button type="submit">login</button>
      </form>
    </div>
  );
}
