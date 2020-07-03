<template>
  <main class="productDescriptionView">
        <!-- <h1>Product Description</h1> -->
        <!-- <h1>{{$route.params.id}}</h1> -->
        
        <div class="left-column">
            <img class="product_image" :src="selectedProducts.url">
        </div>
        <div class = "right-column">
            <div class="description">
                <span>{{selectedProducts.genre}}</span>
                <h1>{{ selectedProducts.productName}}</h1>
                <p>{{selectedProducts.author}}</p>
                <p>{{selectedProducts.description}}</p>
                <p>Year of publication:{{selectedProducts.attributes.year}}</p>
                <p>No Of Pages:{{selectedProducts.attributes.noofpages}}</p>
                <p>Publisher: {{selectedProducts.attributes.publisher}}</p>
                <p>Format: {{selectedProducts.attributes.binding}}</p>
            </div>
            <div class = "merchant">
                <!-- <p> Sold by <a href=" " >Merchant Link</a></p> -->
            </div>  
          <div class="rating">
            <h1>Rating</h1>
            <StarRating :config="config"></StarRating> 
          </div>
            <div> 
                <p>Quantity: {{ value }}</p>
                <vue-numeric-input  v-model="value" :min="1" :max="100" :step="1" controls-type="updown"/>
            </div>
            <div class="product-price">
                <span>Price:</span>
                <span>{{selectedProducts.price}}</span>
                <!-- <button @click = "routeTocart" class="cart-btn">Add to Cart</button> -->
                <p><button @click="routeToCart(selectedProducts.productId)"  tag="button" class="cart-btn" >Add to Cart</button></p>
            </div>         
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'
import {mapGetters} from 'vuex'
export default {
    name: 'products',
    data: function(){
          return {
              value: 1,
              isLogged: localStorage.getItem('isLogged'),
              //selectedProduct: [],
              cartItems: {}
          }
    },
      components: {
       VueNumericInput
    },
    created () {
      const id  = this.$route.params.id
      this.selectedProducts =  this.productList[id-1]
      // eslint-disable-next-line no-console
      console.log("called============="+this.selectedProduct)
      this.$store.dispatch('getcategoryProducts', this.$route.params.id)
    },
    computed: {
        productId() {
            return this.$route.params.id
        },
        ...mapGetters(['productList', 'categoryProducts','merchantId']),
        ...mapGetters(['productDescription']),
        ...mapGetters(['selectedProducts'])
    },
    watch: {
        productId: function () {
            this.fetchProductDetails(this.productId)
        }
    },
    methods: {
        fetchProductDetails(id) {
                // Dispatch action to fetch deatils related to one category
                this.$store.dispatch('fetchProductDetails', {
                    data: {
                        id,
                        success: this.onSuccess,
                        fail: this.onFail
                    }
                })
        },
        onSuccess () {
            // TODO
            // Do somethings...
        },
        onFail () {
            // TODO
            // Show proper erros
        },
      
    routeToCart(id) {
      window.console.log(this.isLogged)
      let data1= {cartId:this.isLogged,productId:id,merchantId:this.selectedProducts.merchantId,quantity:this.value}
            this.$store.dispatch('cartItems',{
               data: data1

            })
            this.$router.push('/cart')
    }
    } 
}
</script>

<style scoped>

.productDescriptionView {
  max-width: 1200px;
  min-height: 60vh;
  margin: 0px auto;
  padding: 15px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: stretch;
}
.left-column {
  transition: transform .2s;
}
.left-column:hover {
    transform: scale(1.2);
}
.right-column {
  flex-basis: 65%;
}
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
 
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}
.left-column {
    height: 100px;
    /* width:100px; */
  width: 65%; 
  position: relative;
}
.right-column {
  width: 35%;
  margin-top: 60px;
}
.description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.product_image {
    width: 320px;
    height: 400px;
    margin-top: 50px;
}
.description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

.product-price {
  display: flex;
  align-items: center;
  margin-left: 150px;
}
.input-group {
  clear: both;
  margin: 15px 0;
  position: relative;
}

.input-group .quantity-field {
  position: relative;
  height: 38px;
  left: -6px;
  text-align: center;
  width: 62px;
  display: inline-block;
  font-size: 13px;
  margin: 0 0 5px;
  resize: vertical;
}

.product-price {
  display: flex;
  align-items: center;
}
 
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
.cart-btn{
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}

</style>