import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <div className="details-wrap">
        <h1>Ticket Detail</h1>
        <h3>{ticket.location} - {ticket.names}</h3>
        <p><em>{ticket.issue}</em></p>
        <div className="btn-wrap">
          <button onClick={onClickingEdit}>Update Ticket</button>
          <button onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>
        </div>
        <hr/>
      </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TicketDetail;