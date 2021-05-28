import Vue from 'vue';

import Nest from '../src';
Vue.use(Nest);

import './styles/App.scss';

import App from './App.vue';
import router from './router';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
