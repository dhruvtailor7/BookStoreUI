<template>
  <main class = "cart">
      <h1> Remove Cart View </h1>
      <router-view/>
      <RemoveCart/>
      </main>
</template>

<script>

import RemoveCart from '@/components/cart/RemoveCart.vue'

export default {
    name:'removecart',
    components: {
        RemoveCart
    }
}
</script>

<style>

</style>