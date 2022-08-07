import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// createStore is depricated. Look into configureStore from redux toolkit
import { createStore } from 'redux'
import { Provider } from 'react-redux';
// import reducer from './reducers/ticket-list-reducer';
import rootReducer from './reducers';
// components
import App from './App';
// styles
import './index.css';

const store = createStore(rootReducer)

store.subscribe(() => 
  console.log(store.getState())
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
