import { callAPI } from './base';

// Login a user
export const loginUser = data => callAPI(`/api/token/`, 'post', data);