import Vue from 'nativescript-vue';
import Home from './components/Home.vue';

import HEREMaps from '@marblsy/here/vue';
Vue.use(HEREMaps);

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();
