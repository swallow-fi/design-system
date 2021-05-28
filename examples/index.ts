import Vue from 'vue';

import Noir from '../src';
Vue.use(Noir);

import './styles/App.scss';

import App from './App.vue';
import router from './router';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
