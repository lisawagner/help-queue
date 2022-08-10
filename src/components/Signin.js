import React from 'react'
import firebase from "firebase/app"

function Signin() {

  const handleSignUp = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log('Successfullly signed up!')
    }).catch(function(err) {
      console.log(err.message);
    })

  }

  const handleSignOut = () => {

    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!")
    }).catch(function(error) {
      console.log(error.message)
    })

  }
  
  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <input type='text' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </React.Fragment>
  )
}

export default Signin