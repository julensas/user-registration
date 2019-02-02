/**
 *
 * UserForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm, FormSection } from 'redux-form/immutable';
import Input from 'components/Input';
import Map from 'components/Map';
import Button from 'components/Button';
import style from './style.scss';

class UserForm extends React.Component {
  onSubmit = data => {
    this.props.onFormSubmit(data.toJS());
  };

  render() {
    const {
      pristine,
      submitting,
      submitSucceeded,
      reset,
      handleSubmit,
      onMapClick,
    } = this.props;
    return (
      <form className={style.form} onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="fullName"
          component={Input}
          type="text"
          label="Full Name:"
        />
        <Field name="email" component={Input} type="email" label="Email:" />
        <Field
          name="coordinates"
          component={Map}
          className={style.map}
          onMapClick={onMapClick}
        />
        <FormSection className={style.address} name="address">
          <Field name="city" component={Input} type="text" label="City:" />
          <Field name="street" component={Input} type="text" label="Street:" />
          <Field
            name="streetNumber"
            component={Input}
            type="text"
            label="House Number:"
          />
          <Field name="zip" component={Input} type="text" label="Zip Code:" />
        </FormSection>
        <Button
          disabled={pristine || submitting || submitSucceeded}
          label="Submit"
          type="submit"
        />
        <Button
          disabled={pristine || submitSucceeded}
          label="Reset"
          onClick={reset}
        />
      </form>
    );
  }
}

function validate(valuesMap) {
  const values = valuesMap.toJS();
  const errors = { address: {} };
  if (!values.fullName || values.fullName.trim() === '') {
    errors.fullName = 'Full Name is Required!';
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Email is Required!';
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email.toLowerCase(),
    )
  ) {
    errors.email = 'Email is Invalid';
  }
  if (
    !values.address ||
    !values.address.city ||
    values.address.city.trim() === ''
  ) {
    errors.address.city = 'City is Required!';
  }
  if (
    !values.address ||
    !values.address.street ||
    values.address.street.trim() === ''
  ) {
    errors.address.street = 'Street is Required!';
  }
  return errors;
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onMapClick: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const withForm = reduxForm({ form: 'user', validate });

export default compose(withForm)(UserForm);
