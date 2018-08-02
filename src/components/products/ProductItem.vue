<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="product">
      <div class="product-image">
        <img class="img-responsive" :src="product.image" alt="productimage">
      </div>
      <div class="product-description">
        <h5>{{ product.name }}</h5>
      </div>
      <div class="product-price">
        Rp. {{ product.price }}
      </div>
      <div class="product-action">
        <AddToCartButton :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import AddToCartButton from '@/components/products/AddToCartButton'

export default {
  name: 'ProductItem',
  props: ['product'],
  components: {
    AddToCartButton
  }
}
</script>
