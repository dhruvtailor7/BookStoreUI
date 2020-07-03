<template>
  <main class = "cart">
      <h1> Remove All View </h1>
      <router-view/>
      <RemoveAllCart/>
      </main>
</template>

<script>

import RemoveAllCart from '@/components/cart/RemoveAll.vue'

export default {
    name:'removeallcart',
    components: {
        RemoveAllCart
    }
}
</script>

<style>

</style>