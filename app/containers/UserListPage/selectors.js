import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userListPage state domain
 */

const selectUserListPageDomain = state =>
  state.get('userListPage', initialState);

/**
 * Other specific selectors
 */

const makeSelectUsers = () =>
  createSelector(selectUserListPageDomain, substate =>
    substate.get('data').toJS(),
  );

/**
 * Default selector used by UserListPage
 */

const makeSelectUserListPage = () =>
  createSelector(selectUserListPageDomain, substate => substate.toJS());

export default makeSelectUserListPage;
export { selectUserListPageDomain, makeSelectUsers };
