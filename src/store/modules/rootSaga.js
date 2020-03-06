import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';

/**
 * This returns a single reducer combining all other reducers
 */
export default function* rootSaga() {
  return yield all([auth, user]);
}
