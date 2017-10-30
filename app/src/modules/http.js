import Vue from 'vue';
import axios from 'axios';
import LocalStorage from 'vue-ls';
import config from './../../dist/config.json';

Vue.use(LocalStorage);

// Setting base URL for all HTTP requests
axios.defaults.baseURL = config.api_url;

export default axios;
