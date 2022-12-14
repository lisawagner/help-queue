import * as actions from './../../actions'
import * as c from '../../actions/ActionTypes'

// NOTE: jest test() and it() functions are interchangeable

// DELETE_TICKET action test
// describe('Help Queue actions', () => {
//   it('deleteTicket should create DELETE_TICKET action', () => {
//     expect(actions.deleteTicket(1)).toEqual({
//       type: c.DELETE_TICKET,
//       id: 1
//     })
//   })
// })

// TOGGLE_FORM action test
it('toggleForm should create TOGGLE_FORM action', () => {
  expect(actions.toggleForm()).toEqual({
    type: c.TOGGLE_FORM
  })
})

// ADD_TICKET action test
// it('addTicket should create ADD_TICKET action', () => {
//   expect(actions.addTicket({
//     names: 'Eleven and Max', 
//     location: 'the Upside Down', 
//     issue: 'Nobody normal ever accomplished anything meaningful in this world.',
//     timeOpen: 0,
//     formattedWaitTime: 'less than a minute ago',
//     id: 1
//   })).toEqual({
//     type: c.ADD_TICKET,
//     names: 'Eleven and Max',
//     location: 'the Upside Down',
//     issue: 'Nobody normal ever accomplished anything meaningful in this world.',
//     timeOpen: 0,
//     formattedWaitTime: 'less than a minute ago',
//     id: 1
//   })
// })

// UPDATE_TIME action test
// it('updateTime should create UPDATE_TIME action', () => {
//   expect(actions.updateTime(1, 'less than a minute ago')).toEqual({
//     type: c.UPDATE_TIME,
//     id: 1,
//     formattedWaitTime: 'less than a minute ago'
//   })
// })
