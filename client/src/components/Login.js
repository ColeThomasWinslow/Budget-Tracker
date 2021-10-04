import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
export const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const LoginAccount = (e) => {
    e.preventDefault();
    const User = {
      email: Email,
      password: Password,
    };
    // function from Context giving the payload
    localStorage.setItem("user", JSON.stringify(User));
    setUser(User);
  };
  return (
    <div>
      {!user && (
        <form onSubmit={LoginAccount}>
          <h2>Login</h2>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <button className="LoginBtn">Login</button>
        </form>
      )}
    </div>
  );
};
