<template>
  <main class="categoryPage">
      <Navbar/>
      <Sidebar/>
      <router-view/>
      <div class="booklist">
          <div v-for = "product in categoryProducts" :key="'product:' + product.id" class="books">
            <div>
              <figure @click="routeToProductDescription(product.productId)">
                <img :src = "product.url" height="150px" width="100px" class="image"> 
              </figure>
                <div class = "productdetails">
                <h4>Book Name: {{product.productName}}</h4>
                <h4>Author: {{product.author}}</h4>
                <h4 img src= "@/assets/discount.png">Price: {{product.price}}</h4>
                <!-- <router-link to="/cart" tag="button" class="buy-btn">Add to Cart</router-link> -->
                </div>
            </div>
        </div>
      </div>
      </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/App/Navbar'

import {mapGetters} from 'vuex'
export default {
    name: 'Category',
    data: function() {
      return{
        //data: ''
      }
    },
    components: {
           Sidebar, Navbar
        },
    computed: {
        routerParams() {
            return this.$route.params
        },
        ...mapGetters(['categoryProducts', 'genreList']),
    },
    // For displaying category products
      created() {
        window.console.log('this is the created hook were calling',this.$route.params.id)
        this.$store.dispatch('getcategoryProducts', this.$route.params.id)
    },
     watch: {
       $route (to, from) {
          if(to.params.id !== from.params.id) {
            this.$store.dispatch('getcategoryProducts', this.$route.params.id)
          }
      }
    }, 
    methods: {
       routeToProductDescription (id) {
        //window.console.log("product id:" +id)
        var data=id
            this.$store.dispatch('productDetails', 
               data,
              // success: getProductDetailSuccess
            )
           // window.console.log(this.data)
           this.$router.push("/product/description/:id")

        },


        click(){
            let data = {
                id: this.product.id,
                url: this.product.url,
                title: this.product.title,
                author: this.product.author,
                price: this.product.price
            }
            this.$store.dispatch('productDetails', {
                data: data,
                success: function () {
                    window.console.log('Product added successfully...');
                },
                fail: function () {
                    window.console.log('Product added failed...');
                }
            })
        }
    }
  
}
    
</script>

<style scoped>
.booklist {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 10px;
  align-items: center;
}
.books {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  height: 325px;
  width: 200px;
}
.books:hover {
    border: 1px solid #777;
}
.image {
  margin-top: 5px;
  justify-content: center;
  display:block;
  margin: auto;
  height: 125px;
  width: 100px
}
.productdetails {
  align-self: center;
  font-size: 2px;
  justify-items: center; 

}
.buy-btn{
  display: inline;
  background-color: #7DC855;
  border-radius: 4px;
  font-size: 16px;
  color: #FFFFFF;
  padding: 8px 10px;
  transition: all .5s;
  margin-left:auto;
  margin-right:15px;

}
.buy-btn:hover {
  background-color: #64af3d;
}
</style>