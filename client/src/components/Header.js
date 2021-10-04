import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
export const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="AccBox">
      <div className="HeaderCont">
        <Link to="/">
          <img width="200px" src="/images/BTrackerLogo.png" />
        </Link>
        {user && (
          <div>
            <button
              className="Logout"
              onClick={() => {
                setUser(null);
              }}
            >
              <Link to="/"> Logout</Link>
            </button>
          </div>
        )}
      </div>
      {user && <p className="SignedIn">Signed in As : {user.email}</p>}
    </div>
  );
};
