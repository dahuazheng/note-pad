import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import header from '@/store/header.js'
import notes from '@/store/notes.js'


export default new Vuex.Store({
    modules: {
      header: header,
      notes: notes
    }
});

