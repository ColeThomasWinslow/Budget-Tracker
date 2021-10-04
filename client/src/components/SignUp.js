import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { UserContext } from "../Context/UserContext";

export const SignUp = () => {
  // State for the POST route
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // How to Set User Context API CALL(../utils/login)
  const { user, setUser } = useContext(UserContext);
  const { addNewUser } = useContext(GlobalContext);
  // Sends POST data
  const AddNewAccount = (e) => {
    e.preventDefault();
    const newUser = {
      name: Name,
      email: Email,
      password: Password,
    };
    // function from Context giving the payload
    localStorage.setItem("user", JSON.stringify(newUser));
    addNewUser(newUser);
    setUser(newUser);
  };
  return (
    <div>
      {user ? (
        <div className="GoTracker">
          <Link to="/tracker">
            <h2>Go to your tracker</h2>
          </Link>
        </div>
      ) : (
        <form onSubmit={AddNewAccount}>
          <h2>Create Account </h2>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
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
          <button className="LoginBtn">Create Account</button>
        </form>
      )}
    </div>
  );
};
