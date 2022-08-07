import ticketListReducer from '../../reducers/ticket-list-reducer'

describe('ticketListReducer', () => {
  let action
  
  const currentState = {
    1: {
      names: 'Bill & Ted',
      location: 'Cordova',
      issue: 'Firebase is not working correctly.',
      id: 1
    },
    2: {
      names: 'Eleven and Nancy',
      location: 'SF',
      issue: 'Firebase 9 makes heads hurt.',
      id: 2
    }
  }

  // Default State Test
  test(
    'Should return default state if no action-type passed into the reducer', () => {
      expect(
        ticketListReducer({}, { type: null })
        ).toEqual({})
  }) 

  // Test for Adding Tickets
  const ticketData = {
    names: 'Bill & Ted',
    location: 'Cordova',
    issue: 'Firebase is not working correctly.',
    id: 1
  }

  test('Should add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData

    action = {
      type: 'ADD_TICKET',
      names,
      location,
      issue,
      id
    }

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names,
        location,
        issue,
        id
      }
    })
  })

  // Test for Deleting a Ticket
  test('Should successfully delete a ticket', () => {

    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Eleven and Nancy',
        location: 'SF',
        issue: 'Firebase 9 makes heads hurt.',
        id: 2
      }
    })
  })

})