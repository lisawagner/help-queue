import formVisibleReducer from './form-visible-reducer'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer
})

export default rootReducer