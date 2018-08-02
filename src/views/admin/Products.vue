<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td><router-link :to="'/admin/edit/' + product._id">Edit</router-link></td>
          <td><a @click="deleteProduct(product._id)">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    products () {
      return this.$store.getters.allProducts
    }
  },
  created () {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  methods: {
    deleteProduct (id) {
      console.log(id)
      this.$store.dispatch('removeProduct', id)
    }
  }
}
</script>

