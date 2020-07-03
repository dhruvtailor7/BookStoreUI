<template>
<div class="sidebar" >
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Fiction'}}">Fiction</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Non-Fiction'}}">Non Fiction</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Competitive'}}">Competitive</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Children'}}">Children</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Short Stories'}}">Short-Stories</router-link>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: function () {
        return {
            routerParams: '',
        }
    },
     created() {
        window.console.log(this.routerParams)
      this.$store.commit('GET_CATEGORY_PRODUCTS', 'routerParams')
    },
    computed: {
        ...mapGetters(['genreList'])
    },
 methods: {
     categoryProducts: function() {
         this.$store.dispatch('getcategoryProducts', {
                data: this.routerParams.id,
                success: this.categoryProductsSuccess
            })
        },
        categoryProductsSuccess: function (result) {
          window.console.log(result);
          window.console.log(this.$router.params)
          this.$router.push('/category/:id')
        }
    }
}
</script>

<style>
.sidebar {
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center; 
    padding-left: 30px;
    padding-right: 30px;
    height: 43px;
    width: 100%;
    font-size: 25px;
    justify-content: space-between;
    background-color: white;
    /* margin-top: -25px; */
    z-index: 999;
}
.sidebar-item {
    align-self: center;
    text-align: center;
    padding: 10px;
    font-size: 18px; 
    text-decoration: none;
    width: 90%;
}
.sidebar a:hover {
  color: black;
  text-decoration: none;
  background-color: #0ea1b6;
  color: white;

}
.categories {
    text-align: left;
}
</style>