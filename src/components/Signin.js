import React from 'react'
import firebase from "firebase/app"
import { useNavigate } from 'react-router-dom'

function Signin() {
  const history = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log('Successfullly signed up!')
      e.target.reset()
    history('/')
    }).catch(function(err) {
      console.log(err.message);
    })
  }

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.signinEmail.value;
    const password = e.target.signinPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      e.target.reset()
      history('/')
    }).catch(function(err) {
      console.log(err.message)
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
      <div className='access-wrap'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input
            type='text'
            name='email'
            autoComplete='off'
            placeholder='Email' />
          <input
            type='password'
            name='password'
            autoComplete='off'
            placeholder='Password' />
          <button type='submit'>Sign up</button>
        </form>

        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input
            type='text'
            name='signinEmail'
            autoComplete='email'
            placeholder='email' />
          <input
            type='password'
            name='signinPassword'
            autoComplete='password'
            placeholder='Password' />
          <button type='submit'>Sign in</button>
        </form>

        <h1>Sign Out</h1>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </React.Fragment>
  )
}

export default Signin