import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Home</h1>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Header;
