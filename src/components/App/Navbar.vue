<template>
<div class = "maincontainer">
    <div id="navbar" class="navbartest">
        <section class="navbartest_division left">
            <router-link :to="{name: 'Home'}" tag="span">
                <img class="navbartest_logo" src="@/assets/bookslogo.png" alt="logo">
            </router-link>
        </section>
        <section class="navbartest_division center">
            <div>
                <input @keyup="handleAutoComplete" type = "text" v-model="searchTerm" placeholder="   search..." class="navbartest_searchBar">
            
                <div v-if="autoCompleteData.length > 0" id="autocomplete">
                <li style="list-style:none;" v-for="(product, index) in autoCompleteData" :key="index">
                    <div @click="routeToProductDescription(product.productId)" class="search-book-item">
                        <figure>
                            <img class="product_image" :src="product.url">
                        </figure>
                        {{product.productName}}
                    </div>
                </li>
        </div>
            </div>
            <button @click ="searchListMethod" class="navbartest_route">Search <img src="@/assets/search.png" height="16px" width="16px"></button>
        </section>
        <section class="navbartest_division right">
            <router-link to="/login" class="navbartest_route" tag="button"> Login <img src="@/assets/login.png" height="16px" width="16px"></router-link>
            <router-link to="/newuser" class="navbartest_newuser" tag="button">Sign Up<img src="@/assets/new.png" height="16px" width="16px"></router-link>
            <router-link to="/cart" class="navbartest_route" tag="button">Cart <img src="@/assets/shopping.png" height="16px" width="16px"></router-link>
        </section>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default { 
    name: 'Navbar',
    data: function () {
    return {
      searchTerm: '',
      searchDisplay: '',
    }
    },
    computed: {
      ...mapGetters(['search', 'autoCompleteData'])
    },
    created() {
        window.console.log(this.searchList)
      this.$store.commit('SET_SEARCH_LIST', 'Fiction')
    },
    methods: {
        ...mapActions(['getSearchList']),
        ...mapActions(['getAutoComplete']),
        searchListMethod: function() {
            this.$store.dispatch('getSearchList', {
                data: this.searchTerm,
                success: this.searchListSuccess
            })
        },
        searchListSuccess: function (result) {
          window.console.log(result);
          this.$router.push('/search')
        },
        handleAutoComplete () {
            if (this.searchTerm) {
                this.getAutoComplete({
                    data: this.searchTerm
                })
            } else {
                this.$store.commit('setAutoCompleteData', [])
            }
        }
    },
}
</script>

<style lang="scss">
#autocomplete{
    padding:5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border:2px solid black;
    overflow: auto;
    z-index:3000;
    position: absolute;
    background-color:white ;
    width: 600px;
    height: 200px;
}
.search-book-item{
    border-bottom: 1px solid grey;
}
.maincontainer {
    background-color: white;
    height: 100px;
    // position:fixed;
    width: 100%;
    z-index: 800;
}
.search-book-item figure img{
    border: 0.5px soild black;
    padding : 1px;
    width:60px;
    height:90px;
}
.search-book-item{
    display: flex;
    flex-flow: row;
    align-content: center;
}
.maincontainer {
    background-color: white;
    height: 100px;
    // position:fixed;
    width: 100%;
    z-index: 800;
}
.navbartest {
    //sbackground-color: whitesmoke
    // background-color: white !important;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    // position:fixed;
    width: 100px;
    
    //justify-content: space-between;
    align-items: stretch;
    &_division {
        display: flex;
        align-items: center;
    }
    &_route {
        align-items: center;
        align-content: center;
        align-self: center;
        width: 100px;
        border-radius: 8px;
        background-color: #0ea1b6;
        font-size: 1.6rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
        margin-left:10px;
        padding: auto;
        height: 30px;
    }
    &_logo {
        margin-left: 30px;
        margin-right: 30px;
        width: 40px;
        height: 40px;
    }
    &_searchBar {
        height: 30px;
        width: 680px;
    }
    &_newuser {
        width: 100px;
        border-radius: 8px;
        background-color: #0ea1b6;
        font-size: 1.6rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
        margin-left:20px;
        padding: auto;
        height: 30px;
    }

}

.left {
    cursor: pointer;
}
.right {
    font-size: 1.5rem;
    margin-left: 30px;
}
</style>