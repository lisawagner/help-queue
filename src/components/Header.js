import React from "react"
import firebase from "firebase/app"
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const history = useNavigate()

  const handleSignOut = () => {

    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!")
      history('/signin')
    }).catch(function(error) {
      console.log(error.message)
    })

  }
  return (
    <React.Fragment>
      <div className="header-wrap">
        <h1>Ticket Queue</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Register/Login</Link></li>
          <button onClick={handleSignOut}>Sign out</button>
        </ul>   
      </div>

    </React.Fragment>
  );
}

export default Header;