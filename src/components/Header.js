import React from "react"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <React.Fragment>
      <div className="header-wrap">
        <h1>Ticket Queue</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>   
      </div>

    </React.Fragment>
  );
}

export default Header;