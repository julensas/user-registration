/**
 *
 * UserListPage
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserListPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class UserListPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>UserListPage</title>
          <meta name="description" content="Description of UserListPage" />
        </Helmet>
        <Link to="/edit">Edit</Link>
      </div>
    );
  }
}

UserListPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  userListPage: makeSelectUserListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userListPage', reducer });
const withSaga = injectSaga({ key: 'userListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserListPage);
