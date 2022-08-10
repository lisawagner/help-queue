import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="reusable-form-wrap">
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='names'
            autoComplete='off'
            placeholder='Pair Names' />
          <input
            type='text'
            name='location'
            autoComplete='off'
            placeholder='Location' />
          <textarea
            name='issue'
            placeholder='Describe your issue.'
            rows="4"/>
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;