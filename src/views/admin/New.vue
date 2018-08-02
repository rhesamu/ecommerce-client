<template>
  <ProductForm @save-product="addProduct" :model="model" />
</template>

<script>
  import ProductForm from '@/components/products/ProductForm.vue'
  export default {
    data () {
      return {
        model: {},
      }
    },
    methods: {
      addProduct (model) {
        console.log('model -->', model)
        this.$store.dispatch('addProduct', model)
      }
    },
    components: {
      ProductForm
    }
  }
</script>

