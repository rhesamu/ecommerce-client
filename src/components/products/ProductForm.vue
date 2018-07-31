<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" placeholder="Name"
          v-model="model.name" v-validate="'required'"
          :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Product name is required</span>
      </div>
      <div class="form-group">
        <label>Price</label>
        <input type="number" name="price" placeholder="Price"
          v-model="model.price" v-validate="'required'"
          :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group">
        <label>Stock</label>
        <input type="number" name="stock" placeholder="Stock"
          v-model="model.stock" v-validate="'required'"
          :class="{'form-control': true, 'error': errors.has('stock') }" />
        <span class="small text-danger" v-show="errors.has('stock')">Stock is required</span>
      </div>
      <div class="form-group">
        <label>Image</label>
        <input type="text" name="image" placeholder="Image"
          v-model="model.image" v-validate="'required'"
          :class="{'form-control': true, 'error': errors.has('image') }" />
        <span class="small text-danger" v-show="errors.has('image')">Image URL is required</span>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'isEditing'],
  methods: {
    saveProduct () {
      console.log(this.errors)
      this.$emit('save-product', this.model)
    }
  }
}
</script>

<style>
 .form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
