import React from 'react'
import { connect } from 'react-redux/es/exports'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import * as a from '../../actions'
// components
import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'
import EditTicketForm from './EditTicketForm'
import TicketDetail from './TicketDetail'

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      editing: false
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => 
    this.updateTicketElapsedWaitTime(),
    60000
    )
  }
  
    componentWillUnmount(){
      clearInterval(this.waitTimeUpdateTimer);
    }
  
    // Refactor: Every 60 secs, this function dispatches an action for 
    //   every single ticket in the queue.
    updateTicketElapsedWaitTime = () => {
      const { dispatch } = this.props
      Object.values(this.props.mainTicketList).forEach(ticket => {
          const newFormattedWaitTime = formatDistanceToNow(ticket.timeOpen, {
            addSuffix: true
          })
        const action = a.updateTime(ticket.id, newFormattedWaitTime)
        dispatch(action)
      })
    }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        selectedTicket: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm()
      dispatch(action);
      }
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id)
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = ticketToEdit;
    const action = a.addTicket(ticketToEdit)
    dispatch(action)
    this.setState({
      editing: false,
      selectedTicket: null
    })
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props
    const {id, names, location, issue } = newTicket
    const action = a.addTicket(newTicket)
    dispatch(action)
    const action2 = a.toggleForm()
    dispatch(action2);
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id]
    this.setState({selectedTicket: selectedTicket})
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail 
      ticket={this.state.selectedTicket} 
      onClickingDelete={this.handleDeletingTicket}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Ticket List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;
      buttonText = "Return to Ticket List"; 
    } else {
      currentlyVisibleState = <TicketList onTicketSelection={this.handleChangingSelectedTicket} ticketList={this.props.mainTicketList} />;
      buttonText = "Add Ticket"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

TicketControl.propTypes = {
  mapTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);


export default TicketControl;
