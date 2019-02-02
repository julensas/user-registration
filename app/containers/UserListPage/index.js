/**
 *
 * UserListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import style from './style.scss';

export class UserListPage extends React.Component {
  componentWillMount() {
    this.props.actions.getData();
  }

  componentWillUnmount() {
    this.props.actions.clearState();
  }

  render() {
    const {
      userListPage: { data },
    } = this.props;
    return (
      <div className={style.list}>
        <Helmet>
          <title>User List</title>
        </Helmet>
        <table>
          <thead>
            <tr>
              <td>Full Name</td>
              <td>Email</td>
              <td>Address</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{`${user.address.city} ${user.address.street} ${
                  user.address.streetNumber
                } ${user.address.zip}`}</td>
                <td>Edit Remove</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

UserListPage.propTypes = {
  actions: PropTypes.shape({
    getData: PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired,
  }),
  userListPage: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = createStructuredSelector({
  userListPage: makeSelectUserListPage(),
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

const withReducer = injectReducer({ key: 'userListPage', reducer });
const withSaga = injectSaga({ key: 'userListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserListPage);
