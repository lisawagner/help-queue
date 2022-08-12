import React from 'react'
import ReactDOM from 'react-dom/client'
// createStore is depricated. Look into configureStore from redux toolkit
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from "./firebase"
import 'firebase/auth'
// components
import App from './App'
// styles
import './index.css'

const store = createStore(rootReducer)

const rrfProps = {
  firebase,
  config: {
        userProfile: "users",
        useFirestoreForProfile: true,
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);

// store.subscribe(() => 
//   console.log(store.getState())
// )
