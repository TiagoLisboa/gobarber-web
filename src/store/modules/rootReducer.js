import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

/**
 * This returns a single reducer combining all other reducers
 */
export default combineReducers({
  auth,
  user,
});
