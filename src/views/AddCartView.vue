<template>
  <main class="cart">
      <h1> Add Cart View </h1>
      <router-view></router-view>
      <AddCart/>
      </main>
</template>

<script>

import AddCart from '@/components/cart/AddCart.vue'

export default {
    name:'addcart',
    components: {
        AddCart
    }    
}
</script>

<style>

</style>