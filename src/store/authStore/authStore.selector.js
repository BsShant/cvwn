import { createSelector } from 'reselect';

const authStore = state => state.authMode;

export const userToken = createSelector(
    [authStore],
    auth => auth.userToken
)