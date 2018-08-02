<template>
  <div>
    <button class="button" @click="removeFromCart(product._id)">Remove</button>
  </div>
</template>

<script>
import { REMOVE_FROM_CART } from '../../store/mutation-types'

export default {
  props: ['product'],
  data() {
    return {
      cart: this.$store.state.cart
    }
  },
  methods: {
    removeFromCart (id) {
      this.$store.commit(REMOVE_FROM_CART, id)
    }
  }
}
</script>

