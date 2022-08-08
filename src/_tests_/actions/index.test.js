import * as actions from './../../actions'

// NOTE: jest test() and it() functions are interchangeable

// DELETE_TICKET action test
describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_TICKET',
      id: 1
    })
  })
})

// TOGGLE_FORM action test
it('toggleForm should create TOGGLE_FORM action', () => {
  expect(actions.toggleForm()).toEqual({
    type: 'TOGGLE_FORM'
  })
})

// ADD_TICKET action test
it('addTicket should create ADD_TICKET action', () => {
  expect(actions.addTicket({
    names: 'Eleven and Max', 
    location: 'the Upside Down', 
    issue: 'Nobody normal ever accomplished anything meaningful in this world.', 
    id: 1
  })).toEqual({
    type: 'ADD_TICKET',
    names: 'Eleven and Max',
    location: 'the Upside Down',
    issue: 'Nobody normal ever accomplished anything meaningful in this world.',
    id: 1
  })
})
