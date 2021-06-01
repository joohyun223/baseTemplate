import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const option = {};
option.router = router;
option.render = h => h(App);

new Vue(option).$mount('#app');