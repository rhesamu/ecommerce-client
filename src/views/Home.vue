<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> E-commerce</h1>
    </div>
    <ProductList />
  </div>
</template>

<script>
  import ProductList from '@/components/products/ProductList.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      ProductList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>