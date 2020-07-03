<template>
  <div>
    <h3 class="page_headers">
      Search Result
    </h3>
      <router-view></router-view>
      <Search></Search>
    <ul class="product_list ">
      <li v-for="product in search" :key="product" class="product_list_item ">
        <figure class="image">
          <img :src="product.url" height="150px" width="150px">
        </figure>
        <div class="added_items_quantity center">
          <p>Book name: {{product.productName}}</p>
          <p>Description: {{product.description}}</p>
          <p>Genre: {{product.genre}}</p>
          <p>Price: {{product.price}}</p>
          <p>Author: {{product.author}}</p>
          <router-link to="/cart" tag="button" class="buy-btn">Add to Cart</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Search from '@/components/Search/Search'
import { mapGetters, mapActions } from 'vuex'
export default {
  data: function() {
          return {
              value: 1
          }
    },
    created() {
      window.console.log(this.searchDisplay)
    },
  components: {
    Search
    },
    computed: {
      ...mapGetters(['productList', 'search','searchDisplay']),
    },
    methods: {
    ...mapActions(['getSearchList']),
    }
}
</script>

<style scoped lang="scss">
.buy-btn{
  display: inline;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  padding: 10px 20px;
  transition: all .5s;
  margin-left:auto;
  margin-right:15px;

}
.buy-btn:hover {
  background-color: #64af3d;
}
.image {
  margin: 10px;
  justify-content: center;
  padding-left: 10px;
}
.product_list {
  width: 50vw;
  list-style-type: none;
  margin: 8px auto 0px;
  padding: 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px grey;
  border: none;
  margin-top: 50px;
}

.product_list_item {
  display: flex;
  flex-flow: row;
  justify-content: center;
  border-bottom: 2px solid grey;
  &:last-child {
    border: none
  }
}

.center {
  flex-grow: 1;
  margin-left: 15px;
}

.image {
  cursor: pointer;
}
.image:hover {
  transform: scale(1.1);
}
</style>