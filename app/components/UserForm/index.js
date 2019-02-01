/**
 *
 * UserForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import Input from 'components/Input';

/* eslint-disable react/prefer-stateless-function */
class UserForm extends React.Component {
  onSubmit = a => {
    console.log(a);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="lastName"
          component={Input}
          type="text"
          label="Last Name:"
        />
      </form>
    );
  }
}

function validate(valuesMap) {
  const values = valuesMap.toJS();
  const errors = {};
  if (!values.lastName || values.lastName.trim() === '') {
    errors.lastName = 'Last Name is Required!';
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Last Name is too short!';
  } else if (Number(values.lastName) > 0) {
    errors.lastName = 'Last Name cant be a number!';
  }
  return errors;
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const withForm = reduxForm({ form: 'user', validate });

export default compose(withForm)(UserForm);
