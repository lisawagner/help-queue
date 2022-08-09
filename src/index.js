import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// createStore is depricated. Look into configureStore from redux toolkit
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { db } from './firebase'
// components
import App from './App'
// styles
import './index.css'

const store = createStore(rootReducer)

// store.subscribe(() => 
//   console.log(store.getState())
// )

const rrfProps = {
  db,
  config: {
        userProfile: "users"
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
