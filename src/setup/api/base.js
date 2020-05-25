import axios from 'axios';

export const BASE_URL = 'http://localhost:8000';

const token = sessionStorage.getItem('token')

export const callAPI = (endpoint, method = 'get', data) => {
   return new Promise((resolve, reject) => {
      axios({
         method,
         headers: {
            Authorization: `JWT ${token}`
         },
         url: `${BASE_URL}${endpoint}`,
         data
      })
         .then(res => resolve(res.data))
         .catch(err => {
            reject({
               status: (err.response && err.response.status) || '',
               message: err.message || ''
            });
         });
   });
};
