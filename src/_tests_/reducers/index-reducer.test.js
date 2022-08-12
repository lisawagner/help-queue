import { createStore } from 'redux'
import formVisibleReducer from '../../reducers/form-visible-reducer'
import rootReducer from '../../reducers/index'
import * as c from '../../actions/ActionTypes'

let store = createStore(rootReducer)

test('Check that initial state of formVisibleReducer matches root reducer', () => {
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }))
})

test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
  const action = {
    type: c.TOGGLE_FORM
  }
  store.dispatch(action)
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action))
})