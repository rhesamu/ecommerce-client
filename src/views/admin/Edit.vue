<template>
  <ProductForm
    @save-product="updateProduct"
    :model="model"
    :isEditing="true"
  />
</template>

<script>
import ProductForm from '@/components/products/ProductForm.vue'
export default {
  components: {
    ProductForm
  },
  data () {
    return {
      
    }
  },
  computed: {
    model () {
      const productById = this.$store.getters.productById(this.$route.params.id)
      return Object.assign({}, productById)
    }
  },
  created () {
    console.log(':id -->',this.$route.params.id)
    if (!this.model.name) {
      console.log('dispatched')
      this.$store.dispatch('productById', this.$route.params.id)
    }
  },
  methods: {
    updateProduct (model) {
      console.log('model', model)
      this.$store.dispatch('updateProduct', model)
    }
  }
}
</script>

