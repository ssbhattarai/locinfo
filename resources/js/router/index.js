import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = Vuex.createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
