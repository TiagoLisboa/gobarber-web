export function updateProfileRequest(data) {
  return {
    type: '@users/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@users/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@users/UPDATE_PROFILE_FAILURE',
  };
}
