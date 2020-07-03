<template>
  <main>
    <CustomNav/>
    <Sidebar/>
      <div class ="center">
      <button @click="checkout" class="buy-btn">Proceed to Buy</button>
       <h3 style = "align-self:center">Your Shopping Cart</h3>
       </div>
        <!-- <button @click="$router.push('checkout')">Proceed to Buy</button> --> 
      <router-view></router-view>
      <Cart></Cart>
    <ul class="product_list ">
      <li v-for="product in cartdetails" :key="product.title" class="product_list_item ">
           
        <figure class="">
          <img :src="product.url" height="150px" width="150px" class="image">
        </figure>
        <div class="added_items_quantity center">
          <p>Name: {{product.productName}}</p>
          <p>Price: {{product.price}}</p>
          <p>Author: {{product.author}}</p>
          
        <section class="right">
          <p>Quantity: {{ product.quantity }}</p>
          <div @click="changequantity(product)"> 
          <vue-numeric-input  v-model="product.quantity" :min="1" :max="100" :step="1" @click="changequantity(product)"></vue-numeric-input>
          </div> 
          <p class="price">Total Price{{product.quantity*product.price}}</p>
          <button class="buy-btn" @click="removeFromCart(product)">Remove</button>
        </section>
        </div> 
      </li> 
    </ul>    
  </main>
</template>
<script>
import VueNumericInput from 'vue-numeric-input'
import { mapGetters,mapActions } from 'vuex'
import Cart from '../components/cart/Cart'
import CustomNav from '../components/CustomerNavbar.vue'
import Sidebar from '@/components/Sidebar'
//import func from '../../vue-temp/vue-editor-bridge'
export default {
  data: function() {
          return {
              quantity: 1,
              isLogged: localStorage.getItem('isLogged')
          }
    },
  components: {
    Cart,
       VueNumericInput, Sidebar, CustomNav
    },
    created(){
       this.getCartDetails({
      data: localStorage.getItem('isLogged')
    })
    },
    computed: {
      ...mapGetters(['cartdetails']),
      ...mapGetters(['selectedProduct'])
    },
    methods: {
          ...mapActions([
        'getCartDetails'
    ]),
      removeFromCart: function(product){
         let data1= {cartId:this.isLogged,productId:product.productId,merchantId:product.merchantId,quantity:"0"}
         window.console.log(data1)
            this.$store.dispatch('cartItems',{ 
               data: data1,
               success: this.reloadCart 
            }) 
           
            },
    reloadCart: function(product){
         window.console.log(product)
      
    },
    changequantity: function(product){ 
      window.console.log("sss")
      var x= product.quantity;
      var y = x.toString();
         let data1= {cartId:this.isLogged,productId:product.productId,merchantId:product.merchantId,quantity:y}
         window.console.log(data1)
            this.$store.dispatch('cartItems',{ 
               data: data1,
            }) 

    },
    checkout: function(){
      this.$store.dispatch('removefromcart',{
        data: this.isLogged

      })
      this.$store.dispatch('checkout',this.isLogged)
    } 
    }  
          } 
  

</script>

<style scoped lang="scss">
.buy-btn{
  display: inline-block;
  margin-top: 70px;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  padding: 12px 20px;
  transition: all .5s;
  margin-left:auto;
  margin-right:auto;
  margin-top: 5px;
}
.buy-btn:hover {
  background-color: #64af3d;
}
.image {
  margin: 10px;

}
.product_list {
  width: 50vw;
  list-style-type: none;
  margin: 8px auto 0px;
  padding: 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px grey;
  border: none;
  background: whitesmoke;
}

.product_list_item {
  display: flex;
  flex-flow: row;
  justify-content: center;
  border-bottom: 1px solid grey;
  &:last-child {
    border: none
  }
}

.center, .right {
  flex-grow: 1;
  margin-left: 15px;
}
.price {
  margin-top: 8px;
}

.center{
  justify-content: center;
}
</style>