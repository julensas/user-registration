/**
 *
 * ActionButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

class ActionButton extends React.PureComponent {
  onClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { label } = this.props;
    return (
      <button type="button" onClick={this.onClick}>
        {label}
      </button>
    );
  }
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
