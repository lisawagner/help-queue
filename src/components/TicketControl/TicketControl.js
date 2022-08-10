import React from 'react'
import { connect } from 'react-redux/es/exports'
import PropTypes from 'prop-types'
import * as a from '../../actions'
// components
import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'
import EditTicketForm from './EditTicketForm'
import TicketDetail from './TicketDetail'
// firebase
import { withFirestore, isLoaded } from 'react-redux-firebase'

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      editing: false
    };
  }

  handleClick = () => {
    const { dispatch } = this.props
    if (this.state.selectedTicket != null) {
      this.setState({
        selectedTicket: null,
        editing: false
      })
    } else {
      const action = a.toggleForm()
      dispatch(action)
      }
  }

  handleDeletingTicket = (id) => {
    this.props.firestore.delete({collection: 'tickets', doc: id})
    this.setState({selectedTicket: null})
  }

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleEditingTicketInList = () => {
    this.setState({
      editing: false,
      selectedTicket: null
    })
  }

  handleAddingNewTicketToList = () => {
    const { dispatch } = this.props

    const action = a.toggleForm()
    dispatch(action)
  }

  handleChangingSelectedTicket = (id) => {
    this.props.firestore.get({collection: 'tickets', doc: id}).then((ticket) => {
        const firestoreTicket = {
          names: ticket.get('names'),
          location: ticket.get('location'),
          issue: ticket.get('issue'),
          id: ticket.id
        }
        this.setState({selectedTicket: firestoreTicket})
      })
  }

  render(){
    const auth = this.props.firebase.auth()
    let currentlyVisibleState = null
    let buttonText = null

    if(!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }

    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue</h1>
        </React.Fragment>
      )
    }

    if ((isLoaded(auth)) && (auth.currentUser != null)) {

      if (this.state.editing ) {      
        currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
        buttonText = "Return to Ticket List"
      } else if (this.state.selectedTicket != null) {
        currentlyVisibleState =
          <TicketDetail 
            ticket={this.state.selectedTicket} 
            onClickingDelete={this.handleDeletingTicket}
            onClickingEdit = {this.handleEditClick} />
          buttonText = "Return to Ticket List"
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState =
          <NewTicketForm
            onNewTicketCreation={this.handleAddingNewTicketToList}/>
          buttonText = "Return to Ticket List"
      } else {
        currentlyVisibleState = <TicketList onTicketSelection={this.handleChangingSelectedTicket} />
        buttonText = "Add Ticket"
      }

    }

    return (
      <React.Fragment>
        <div className='ticket-control'>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>  
        </div>
      </React.Fragment>
    );
  }

}

TicketControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);


export default withFirestore(TicketControl)
