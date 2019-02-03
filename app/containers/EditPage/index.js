/**
 *
 * EditPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import UserForm from 'components/UserForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import style from './style.scss';

export class EditPage extends React.Component {
  componentWillMount() {
    this.props.actions.getUserById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.actions.clearState();
  }

  render() {
    const {
      actions: { edit, getAddressByLatLng },
      editPage: { user },
    } = this.props;
    return (
      <div className={style.editPage}>
        <Helmet>
          <title>Edit</title>
        </Helmet>
        <h1>User edit</h1>
        {user.id && (
          <UserForm
            onFormSubmit={edit}
            onMapClick={getAddressByLatLng}
            initialValues={user}
          />
        )}
        {!user.id && (
          <p>
            User does not exist.
            <Link to="/">Create a new one</Link>
            <Link to="/list">Or go to users list</Link>
          </p>
        )}
      </div>
    );
  }
}

EditPage.propTypes = {
  actions: PropTypes.shape({
    edit: PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired,
    getUserById: PropTypes.func.isRequired,
    getAddressByLatLng: PropTypes.func.isRequired,
  }),
  match: PropTypes.object.isRequired,
  editPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editPage: makeSelectEditPage(),
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

const withReducer = injectReducer({ key: 'editPage', reducer });
const withSaga = injectSaga({ key: 'editPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditPage);
