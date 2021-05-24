import Vue from 'vue';
import VueRouter from 'vue-router';

import Buttons from '@/views/Buttons.vue';
import Forms from '@/views/Forms.vue';
import Swipe from '@/views/Swipe.vue';
import Accordion from '@/views/Accordion.vue';
import Dropdown from '@/views/Dropdown.vue';
import Modal from '@/views/Modal.vue';
import Spinner from '@/views/Spinner.vue';
import Tooltip from '@/views/Tooltip.vue';
import Datepicker from '@/views/Datepicker.vue';
import Pagination from '@/views/Pagination.vue';

// 필수
Vue.use(VueRouter);

const routes = [
  {
    path     : '/', 
    name     : 'button', 
    component: Buttons
  }, {
    path     : '/forms', 
    name     : 'forms', 
    component: Forms
  }, {
    path     : '/swipe', 
    name     : 'swipe', 
    component: Swipe
  }, {
    path     : '/accordion', 
    name     : 'accordion', 
    component: Accordion
  }, {
    path     : '/dropdown', 
    name     : 'dropdown', 
    component: Dropdown
  }, {
    path     : '/modal', 
    name     : 'modal', 
    component: Modal
  }, {
    path     : '/spinner', 
    name     : 'spinner', 
    component: Spinner
  }, {
    path     : '/tooltip', 
    name     : 'tooltip', 
    component: Tooltip
  }, {
    path     : '/datepicker', 
    name     : 'datepicker', 
    component: Datepicker
  }, {
    path     : '/pagination', 
    name     : 'pagination', 
    component: Pagination
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/baseTemplate',
  routes
});

export default router;