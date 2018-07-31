import axios from 'axios'
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS
  // ,ALL_MANUFACTURERS,
  // ALL_MANUFACTURERS_SUCCESS
} from './mutation-types'

const API_BASE = 'http://localhost:3000/api'
// const API_BASE = 'http://ecommerce-api.rhesautomo.com/api'

export const productActions = {
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    // fetch products from API
    axios.get(`${API_BASE}/products`).then(response => {
      console.log(response.data)
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    }).catch(err => console.log('error fetching products -->', err))
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    // Fetch product by ID from API
    axios.get(`${API_BASE}/products/${payload}`).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    // Create a new product via API
    axios.post(`${API_BASE}/products`, payload).then(response => {
      commit(ADD_PRODUCT_SUCCESS, response.data)
    })
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_PRODUCT)
    // Update product via API
    axios.put(`${API_BASE}/products/${payload._id}`, payload).then(response => {
      commit(UPDATE_PRODUCT_SUCCESS, response.data)
    })
  },
  removeProduct ({commit}, payload) {
    commit(REMOVE_PRODUCT)
    // Delete product via API
    axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
      console.debug('response', response.data)
      commit(REMOVE_PRODUCT_SUCCESS, response.data)
    })
  }
}
