<template>
  <div class="profile-page">
    <div class = "customer_container">
    <h3>My profile</h3>
    <img
      class = "image" src = "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"  alt="User Image"
      height="180px"
      width="200px"
    />
    <h4>Name:</h4>
    <h4>Address:</h4>
    <h4>Email:</h4>
    <h4>Phone Number:</h4>
    </div>
    <button style="align:center" @click="orderHistory">Order History</button> 
    <div class = "orderHistory">
      <ul class="product_list "> 
      <li v-for="(order, index) in orderId" :key="index" class="product_list_item ">
          <button @click="Details(order.orderId)">Order Details:</button><br><br>
      </li> 
    </ul>
    <ul >
      <li v-for="(order, index) in orderDetail" :key="index" class="product_list_item "> 
         <p>Name: {{order.productName}}</P> <br> 
          <p>Price: {{order.price}}</P> <br> 
         <p>Quantity: {{order.quantity}}</P> <br> 
        <p>Product Name: <img src='order.url'/></P> 
        </li>  
      </ul> 
  </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
      return {
        islogged: localStorage.getItem('isLogged')
      }
  },
   computed: {
      ...mapGetters(['orderId']),
      ...mapGetters(['orderDetail'])
    },
  components: {},
   methods: {
        ...mapActions([
          'orderDetails'
        ]),
        Details (id){  
            this.orderDetails(id) 
        },
        orderHistory: function(){
           this.$store.dispatch('orderHistory',this.islogged) 
        },
   }
};
</script>
<style lang = scss>
.customer_container{
  height: 420px;
  width: 500px;
  /* border: 2px solid  red; */
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: 50px;
  margin: 0px auto;
  margin-top: 60px;
  text-align: center;
  padding-top:20px;
}
.product_list {
  width: 50vw;
  list-style-type: none;
  margin: 8px auto 0px;
  padding: 0px;
  border-radius: 15px;
  /* box-shadow: 0px 0px 8px 4px grey; */
  border: none;
}
.product_list_item {
  display: flex;
  flex-flow: row;
  justify-content: center;
  border-bottom: 3px solid grey;
  &:last-child {
    border: none
  }
}
.orderHistory{
  text-align: center;
}
</style>