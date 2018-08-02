<template>
  <div>
    <button class="button" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
import { ADD_TO_CART } from '../../store/mutation-types'

export default {
  props: ['product'],
  data() {
    return {
      cart: this.$store.state.cart
    }
  },
  methods: {
    addToCart () {
      this.$store.commit(ADD_TO_CART, this.product)
    }
  }
}
</script>

