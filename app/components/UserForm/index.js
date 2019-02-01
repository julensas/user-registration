/**
 *
 * UserForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';

/* eslint-disable react/prefer-stateless-function */
class UserForm extends React.Component {
  onSubmit = a => {
    console.log(a);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="lastName" component="input" type="text" />
      </form>
    );
  }
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const withForm = reduxForm({ form: 'user' });

export default compose(withForm)(UserForm);
