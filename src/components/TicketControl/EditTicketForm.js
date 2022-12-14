import React from "react"
import ReusableForm from "./ReusableForm"
import PropTypes from "prop-types"
import { useFirestore } from 'react-redux-firebase'

function EditTicketForm (props) {
  const { ticket } = props
  const firestore = useFirestore()

  function handleEditTicketFormSubmission(event) {
    event.preventDefault()

    props.onEditTicket()
    const propertiesToUpdate = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
    }
    return firestore.update({ collection: 'tickets', doc: ticket.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission} 
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func,
  // ticket: PropTypes.object
};

export default EditTicketForm;