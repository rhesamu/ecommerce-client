<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Cart page'
    }
  }
}
</script>
