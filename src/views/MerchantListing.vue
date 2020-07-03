<template>
<div>
    <div class="nav">
    <button class="signout" style="float:right" @click="home()">Sign Out</button>
    <button class="signout" @click="details"> My Profile </button>
    <h1 class="h1">Welcome Merchant!</h1>
    </div>
    <br> <br><br><br>
    <router-link style="font-size:20px"  to="/addbook" @click="toogleAddProductModalBox">Add a new Book <img src="@/assets/plus.png" height="16px" width="16px"></router-link>
    <h3> Your products on sale: </h3>
    <table id="table">
        <tr>
        <th>Product Name</th>
        <th>Author</th>
        <th>Price</th>
        <th>Genre</th>
        <th>Publisher Name</th>
        <th>year Of Publishing</th>
        <th>binding type</th>
        <th>ISBN</th>
        <th>Quantity</th>
        <th>product logo</th>
        <th>Product Rating</th>
        <th>Number Of Pages</th>
        </tr>
        <tr>
        <tr v-for="(product, index) in merchantProductList" :key="index">
        <td>{{product.productName}}</td>
        <td>{{product.author}}</td>
        <td>{{product.price}}</td>
        <td>{{product.genre}}</td>
        <td>{{product.attributes.publisher}}</td>
        <td>{{product.attributes.year}}</td>
        <td>{{product.attributes.binding}}</td>
        <td>{{product.isbn}}</td>
        <td>{{product.quantity}}</td>
        <td><img :src='product.url' width="100" height="200"></td>
        <td>{{product.rating}}</td>
        <td>{{product.attributes.noofpages}}</td>
        <td class = "merchant_button" ><button id="button" @click="toogleAddProductModalBox(product)">edit details</button>
        <span id="mypopup"></span>
        <br> <br>
       <button id="button" @click="remove(product)">Remove Product</button></td>
        </tr>
    </table>
    <MerchantDetails v-if="flag1" :toggleFunction="getMerchantDetailsSuccess"></MerchantDetails>
    <UpdateProduct v-if="flag" :selectedProduct="edit"  :toggleFunction="toogleAddProductModalBox"></UpdateProduct>
    </div>
</template>
<script>
import MerchantDetails from '@/components/merchant/MerchantDetails'
import { mapGetters, mapActions } from 'vuex'
import UpdateProduct from '@/components/merchant/UpdateProduct.vue'
export default {
  name: 'App',
  components: {
     UpdateProduct,
     MerchantDetails
  },
  data() {
      return {
        displayUpdateProfile: false,
        flag:false,
        edit: "",
        edit1: "",
        flag1: false
      }
  },
  computed: {
    ...mapGetters([
      'merchantProductList',
      'merchantId'
    ])
  },
  created () {
      this.getAllProductByMerchantId({
      data: localStorage.getItem('isLogged')
    })
  },
  methods : {
    ...mapActions([
    'getAllProductByMerchantId'
    ]),
      merchantProducts: function() {
          var data = {
              merchantName : this.merchantDetails
          }
          window.console.log("merchantname", data)
          this.$store.dispatch('getMerchantProducts', {
              data
          })
      },
     toogleAddProductModalBox: function(product = {}){
        this.flag  = !this.flag;
        this.edit=product;
     },
     remove: function(product){
        let data = {...product.merchantId,...product.productId}
        data.productId= product.productId;
        data.merchantId= localStorage.getItem('isLogged');
            event.preventDefault();
            event.stopPropagation();
            this.$store.dispatch('deleteProduct', {
                data: data,
                success: this.addNewProductSuccess
            })
        window.console.log(data.productId)
        alert('product deleted successfully');
     },
     details: function (){
         event.preventDefault();
            event.stopPropagation();
            this.$store.dispatch('getMerchantDetails', {
                data: localStorage.getItem('isLogged'),
                success: this.getMerchantDetailsSuccess
            })
     },
     getMerchantDetailsSuccess () {
        window.console.log(this.flag1)
      this.flag1 = !this.flag1
     },
     home: function() {
       this.$router.push("/")
     },
    toggle: function() {
       this.flag1=!this.flag1;
     }
  }
}
</script>
<style scoped>
router-link{
  float:right;
}
.merchant_button {
  border: none;
}
#button {
  padding: 10px 30px 10px 30px;
  background-color: #0EA1B6;
  color: white;
  border-radius: 10px;
  cursor: pointer;
transition: all 0.4s ease 0s;
}
#button:hover{
    background: #0C8699;
}
#table{
  border: 1px solid grey;
  width:85%;
  padding:30px;
  margin:40px;
  background-color:ash-white;
  row-gap:10px;
  text-align: center;
  font-size:20px;
  border-right-color: white;
}
.nav{
  background-color: rgb(152, 216, 228);
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0%;
  right: 0%;
}
td{
   border: 1px solid #ddd;
   font-size:15px;
   padding:8px;
}
th{
  border: 1px solid #add
}
.h1{
  color:white;
  font-size: 40px;
}
.signout{
  float:right;
  border: none;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 15px;
  padding: 8px 20px 8px 20px;
  background-color: #0EA1B6;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.4s ease 0s;
}
.signout:hover{
    background: #0C8699;
}
div1{
    z-index: -1;
}
h2{
    text-align: left;
}
</style>