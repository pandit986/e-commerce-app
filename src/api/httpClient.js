// src/api/httpClient.js
import axios from 'axios';
// import swal from 'sweetalert';

const httpClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
httpClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;
    // swal('Error', message, 'error');
    return Promise.reject(message);
  }
);

export default httpClient;