import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing

export default function Signup() {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");

  const handleChange = (e) => {
    setname(e.target.value);
  };
  const handleSubmit = (e) => {
    setname(e.target.value);
    console.log(name);
  };
  return (
    <div className="container">
      <h1>Signup</h1>
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
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">Password: </label>
          <input type="password" name="pwd" id="pwd" />
        </div>
        <p>
          already have account?<Link to="/Login">Login</Link>
        </p>
        <button type="submit">signup</button>
      </form>
    </div>
  );
}
