/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function Input({ label, input, meta: { touched, error } }) {
  return (
    <div className={style.input}>
      <label className={style.label}>
        {label}
        <input {...input} />
      </label>
      {touched && error && <span className={style.error}>{error}</span>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default Input;
