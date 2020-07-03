/* eslint-disable no-console */
/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    merchantId: '',
    users: {},
    categoryProducts: [],
    cartItems: [],
    // cartCount: 0,
    cartdetails:[],
    searchList: [],
    selectedProduct: [],
    marchantProducts: [],
    searchDisplay: [],
    topFive: [],
    orderId: [],
    orderDetails: [],
    autoCompleteData: [],
    product: [
      {
        id: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbCguIryM13WHy8TeJn5P9bTwHDfKPVuuz0vNVKwb_KhoBo3MC",
        title:"Kite Runner",
        author:"Khaleed",
        price: 300
      },
      {
        id: 2,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgBuhT15PD5U-mVrhloPHX_Yp8QCbnINppJBEDPkaa0gF2lktm",
        title:"The Shining",
        author:"Stephen King",
        price: 260
      },
      {
        id: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgx4W9Ie1dygiEyrJOuQeUHn5xAc8u5DrXD2giPvUKH1RBEuNb",
        title:"The Book Thief",
        author:"Markus Zusak",
        price: 480
      },
      {
        id: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoY0C60dff2TWbJFUw1Rwl72o9OOFtUN6asSNubXHdPny4zloi",
        title:"Gone Girl",
        author:"Gillian Flynn",
        price: 270
      }
  ],
  genre:[
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbCguIryM13WHy8TeJn5P9bTwHDfKPVuuz0vNVKwb_KhoBo3MC",
      title:"Kite Runner",
      author:"Khaleed",
      price: 300
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgBuhT15PD5U-mVrhloPHX_Yp8QCbnINppJBEDPkaa0gF2lktm",
      title:"The Shining",
      author:"Stephen King",
      price: 260
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgx4W9Ie1dygiEyrJOuQeUHn5xAc8u5DrXD2giPvUKH1RBEuNb",
      title:"The Book Thief",
      author:"Markus Zusak",
      price: 480
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoY0C60dff2TWbJFUw1Rwl72o9OOFtUN6asSNubXHdPny4zloi",
      title:"Gone Girl",
      author:"Gillian Flynn",
      price: 270
    }
],
  },
  mutations: {
    SET_PRODUCT(state, payload) {
      state.marchantProducts = payload
    },
    SET_SELECTED_PRODUCT(state, payload) {
      state.selectedProduct = payload
    },
    SET_CART_ITEMS(state, payload) {
      state.cartItems = payload
    },
    GET_CART_DETAILS(state,payload){
       state.cartdetails=payload
    },
    SET_SEARCH_LIST(state,payload) {
      state.searchList = payload
    },
    SET_SEARCH_DISPLAY(state,payload) {
      state.searchDisplay = payload
    },
    UPDATE_URL(state, url) {
      state.users = {
        avatar_url: url
      }
    },
    SET_USER_DETAILS(state, payload) {
      window.console.log('@@@@@', payload)
      state.userDetails = payload
    },
    GET_DETAILS(state,payload){
      state.merchantdetails=payload
   },
   GET_MERCHANTID(state,payload){
    state.merchantId = payload.response
  },
    GET_CATEGORY_PRODUCTS(state, payload) {
      state.categoryProducts = payload
    },
    GET_TOP_FIVE(state,payload){
      state.topFive= payload
    },
    GET_ORDERID(state,payload){
      state.orderId=payload
    },
    setAutoCompleteData(state, payload) {
      state.autoCompleteData = payload
    },
    GET_ORDERDETAILS(state,payload){
      state.orderDetails=payload
    }
  
  },
  actions: {
    loginUser (context, {data, success, fail}) {
      // window.console.log(payload);
      fetch('http://localhost:8080/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          if (res !== "Not registered") {
          localStorage.setItem('isLogged',res.response)  
          context.commit('GET_MERCHANTID', res)
          success && success()
          } else {
            fail&& fail()
          }
        })

    },
      NewUser (context, payload) {
        fetch('http://localhost:8080/login/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload.data)
        })
        .then(res=>res.json)
      },
    selectedProduct({commit}, data) {
        commit('SET_SELECTED_PRODUCT', data)
    },
    cartItems(context, {data,success}) {
      fetch('http://localhost:8080/cart/addToCart', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        context.commit(' SET_CART_ITEMS',res)
        success && success(res)
      })
    },
    searchList({commit},data) {
      commit('SET_SEARCH_LIST', data)
    },
    searchDisplay({commit}, data) {
      commit('SET_SEARCH_DISPLAY', data)
   },
    getSearchList(context, {data, success}) {
      window.console.log(data)
      fetch('http://localhost:8090/search/search?keyword='+ data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        console.log(res)
        context.commit('SET_SEARCH_LIST',res)
        success && success(res)
      }).catch( (err) => {
        console.log(err)
      })
    },

    getProductListing(context, {data, success}) {
      fetch('http://localhost:8080/product/getProductByGenre/'+data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        console.log(res)
        context.commit('SET_SELECTED_PRODUCT',res)
        success && success(res)
      }).catch( (err) => {
        console.log(err)
      })
    },
    getcategoryProducts(context, data) {
      window.console.log(data)
      fetch('http://localhost:8080/product/getProductByGenre/'+data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        console.log(res)
        // window.console.log("Here")
        context.commit('GET_CATEGORY_PRODUCTS',res)
      }).catch( (err) => {
        console.log(err)
      })
    },
    addNewProduct (context, {data, success}) {
      fetch('http://localhost:8080/product/addProduct', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        context.commit('SET_PRODUCT',res)
        success && success(res)
      })
    },
    deleteProduct (context, {data, success}) {
      fetch('http://localhost:8080/product/removeProduct', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => res.json()).then( (res) => {
        //context.commit('SET_PRODUCT',res)
        success && success(res)
      })
      window.console.log(this.x)
    },
    getAllProductByMerchantId (context, {data, success}) {
      fetch('http://localhost:8080/merchant/getProductByMerchantId/'+data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => res.json()).then( (res) => {
        context.commit('SET_PRODUCT',res)
        success && success(res)
      })
      window.console.log(this.x)
    },
    getMerchantDetails(context,{data,success}){
      fetch('http://localhost:8080/merchant/getMerchantById/'+data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => res.json()).then( (res) => {
        context.commit('GET_DETAILS', res)
        window.console.log(res)
        success && success(res)
      })
    },
  fetchProductDetails (context, {data, success, fail}) {
    window.console.log([data, success, fail])
    // success && success(res)
    // fail && fail(res)
  },
  productDetails(context, data, success) {
    fetch('http://localhost:8080/product/getProductByProductId/'+ data, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(data)
    })
    .then(res => res.json()).then((res) => {
      context.commit('SET_SELECTED_PRODUCT', res)
      window.console.log(res)
      success && success(res)
    })
  },
   getCartDetails(context,{data,success}){
      fetch("http://localhost:8080/cart/getFromCart/"+data,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json()).then((res) => {
        context.commit('GET_CART_DETAILS', res)
        window.console.log(res)
        success && success(res)
      }) 
  },
    removefromcart(data){
        fetch("http://localhost:8080/cart/removeAllFromCart",{
        method:'DELETE',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },

    } )
    },
    checkout(context,data){
      fetch("http://localhost:8080/order/checkout/"+data,{
         method:'GET',
         headers: {
          'Content-Type': 'application/json'
        },

      })

    },
    getTopFive(context){
      fetch("http://localhost:8080/product/getTopProducts",{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json()).then((res) => {
        context.commit('GET_TOP_FIVE', res)
      }) 
    } ,
    sendToken(context,{data}){
      window.console.log("data:"+JSON.stringify(data))
      fetch("http://localhost:8080/login/googlelogin",{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type':'application/json'
        },
      })
      .then(res => res.json())
      .then(res => {
          window.console.log(res)
          if(res.response != null ){
          localStorage.setItem('isLogged',res.response)  
          context.commit('GET_MERCHANTID', res)
          }
          else{
            alert("failed Login")
          }
      });
    }
    ,
    getAutoComplete(context, {data}) {
      fetch('http://localhost:8090/search/search?keyword='+ data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify(data)
      })
      .then(res => res.json()).then((res) => {
        context.commit('setAutoCompleteData', res)
      }).catch( (err) => {
        window.console.log(err)
      })
    },
    
    orderHistory(context,data){
      fetch("http://localhost:8080/order/getOrderHistoryByCustomerId/"+data,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json()).then((res) => {
      context.commit('GET_ORDERID', res)
    })

    },
    orderDetails(context,data){
      fetch("http://localhost:8080/order/getOrderDetailsbyOrderId/"+data,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json()).then((res) => {
      context.commit('GET_ORDERDETAILS', res)
    })
  
}
  },
  getters: {
    myGetter(state) {
      return state.users.avatar_url || ""
    },
    userDetails (state) {
      window.console.log('aaa', state.userDetails)
      return state.userDetails || []
    },
    merchantProductList(state) {
      return state.marchantProducts
    },
    productList : state => state.product || [],
    selectedProducts (state) {
      return state.selectedProduct || []
    },
    search(state) {
      return state.searchList || []
    },
    getMerchantDetails(state){
      return state.merchantdetails
    },
    merchantId(state){
      return state.merchantId
    },
    searchDisplay(state){
      return state.searchDisplay
    },
    categoryProducts(state){
      return state.categoryProducts
    },
    genreList : state => state.genre || [],
    cartdetails(state){
      return state.cartdetails
    },
    topFive(state){
       return state.topFive || []
    },
    orderId(state){
      return state.orderId
    },
    autoCompleteData(state) {
      return state.autoCompleteData || []
    },
    orderDetail(state){
       return state.orderDetails
    }

  }
})
