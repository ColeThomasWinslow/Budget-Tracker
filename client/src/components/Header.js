import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
export const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Link to="/">
        <h2>Budget Tracker</h2>
      </Link>
      {user && (
        <div>
          <div>
            <button
              className="btn"
              onClick={() => {
                setUser(null);
              }}
            >
              <Link to="/"> Logout</Link>
            </button>
            <p>Signed in As : {user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};
