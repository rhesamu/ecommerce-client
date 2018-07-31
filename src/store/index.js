import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters } from './getters'
import { productMutations, cartMutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: []
  },
  getters: Object.assign({}, productGetters),
  mutations: Object.assign({}, productMutations, cartMutations),
  actions: {

  }
})
