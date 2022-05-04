import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export function createStore() {
	const store = new Vuex.Store({
		state: {
		},
		mutations: {
		},
		actions: {
		},
		modules: {
		}
	});
	return store;
}