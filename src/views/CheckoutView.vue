<template>
  <main>
      <h1>Thanks for shopping</h1>
      <router-view></router-view>
      <Checkout/>
  </main>
</template>

<script>
import Checkout from '@/components/checkout/Checkout.vue'

export default {
    name:'checkout',
    components: {
        Checkout
    }
}
</script>

<style>

</style>