/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import {createApp} from 'vue'



import store from './store/store';
import App from './layouts/App';
import router from './router/routes';


 const app = createApp(App)
 app.use(router)
 app.use(store)
 app.mount('#app')


