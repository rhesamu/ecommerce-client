<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <ProductItem 
            :product="product"
            :key="product._id" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  created () {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  computed: {
    products () {
      return this.$store.getters.allProducts
    }
  }
}
</script>

