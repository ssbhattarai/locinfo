import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from './auth';

const dataState = createPersistedState({
    paths: ['data']
  })

  export new Vuex.Store({
    modules: {
        auth
    },
    plugins: [dataState]
  })
