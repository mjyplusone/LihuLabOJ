// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import problems from 'components/problems/problems.vue';
import submission from 'components/submission/submission.vue';
import ranking from 'components/ranking/ranking.vue';
import help from 'components/help/help.vue';

import './common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  {path: '/problems', component: problems},
  {path: '/submission', component: submission},
  {path: '/ranking', component: ranking},
  {path: '/help', component: help}
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
