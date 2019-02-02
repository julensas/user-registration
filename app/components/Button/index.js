/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function Button({ label, ...rest }) {
  return (
    // eslint-disable-next-line
    <button className={style.button} {...rest}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
