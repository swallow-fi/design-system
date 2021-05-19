import Vue from 'vue';

import App from './App.vue';
import router from './router';

import Noir from '../src';
Vue.use(Noir);

import './styles/App.scss';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
