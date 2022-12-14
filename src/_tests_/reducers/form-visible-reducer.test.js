import * as c from '../../actions/ActionTypes'
import formVisibleReducer from '../../reducers/form-visible-reducer'

describe("formVisibleReducer", () => {

  // Test default state
  test('Should return default state if no action type recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      formVisibleOnPage: false
    })
  })

  // Boolean toggle test
  test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  })



});