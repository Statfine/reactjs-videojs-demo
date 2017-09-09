import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectGlobal = () => createSelector(
  (state) => state.get('global'),
  (substate) => substate.get('appReducer')
);

const selectLoggedIn = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loggedIn')
);

const selectUserInfo = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('userInfo').toJS()
);

const selectpromptInfo = () => createSelector(
  selectGlobal(),
  (gloabl) => gloabl.get('promptInfo')
);

export {
  makeSelectLocationState,
  selectLoggedIn,
  selectUserInfo,
  selectpromptInfo,
};
