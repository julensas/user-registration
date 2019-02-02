/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import UserForm from 'components/UserForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import style from './style.scss';

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.Component {
  render() {
    const {
      actions: { register, getAddressByLatLng },
    } = this.props;
    return (
      <div className={style.homePage}>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <h1>User registration</h1>
        <UserForm onFormSubmit={register} onMapClick={getAddressByLatLng} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  actions: PropTypes.shape({
    register: PropTypes.func.isRequired,
    getAddressByLatLng: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
