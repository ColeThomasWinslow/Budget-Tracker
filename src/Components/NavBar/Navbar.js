import React, { useState } from "react";
import { Link } from "react-router-dom";
// Navbar With Links To (Link Banking, Account Settings, Edit-Finance-Details)
function Navbar() {
  const [LoggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      <div className="NavCont">
        <div className="Logo">
          <Link className="LogoLink" to="/Home">
            BUDGET-TRACKER $
          </Link>
        </div>
        <div className="LinkBox">
          <Link className="link" to="/Account">
            Account
          </Link>
          <Link className="link" to="/Finance">
            Finance Details
          </Link>
          <Link className="link" to="/Banking">
            Link Banking
          </Link>
        </div>
        <div className="AuthBox">
          {LoggedIn ? (
            <button className="Auth">Logout</button>
          ) : (
            <button className="Auth">LogIn</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
