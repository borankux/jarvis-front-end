"use strict";

import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true;
const http = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000
});

http.interceptors.request.use((config) => {
  let methods = ['post', 'put', 'delete', 'update'];
  if (methods.indexOf(config.method) > -1) {
     config.data = qs.stringify(config.data)
  }
  return config;
}, (err) => {
  return Promise.reject(err)
});

http.interceptors.response.use(response => {
  return response.data;
}, (err) => {
  return Promise.reject(err)
});

export default http;
