/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import {createApp} from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueProgressBar from "@aacassandra/vue3-progressbar";
const options = {
    color: "rgb(14 135 233)",
    failedColor: "#874b4b",
    thickness: "10px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
  };

import store from './store/store';
import App from './layouts/App';
import index from './router/index';

 const app = createApp(App)
 app.use(index)
 app.use(VueSweetalert2)
 app.use(VueProgressBar, options)
//  app.use(store)
 app.mount('#app')


