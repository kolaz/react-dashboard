import { callAPI } from './base';

// Get myself
export const getMyself = () => callAPI(`/api/users/me`);

// Update myself
export const updateMyself = data => callAPI(`/api/users/me`, 'put', data);
