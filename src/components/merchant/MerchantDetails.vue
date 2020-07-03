<template>
<section class="modal1">
    <div  class="modal_background1"></div>
    <div class="modal_content1">
    <span class="modal_close1" @click="toogleModalBox">X</span>
    <table>
     <tr v-for="(product, index) in getMerchantDetails" :key="index">
     <td>{{product}}</td>
     </tr>
     </table>
    </div>
</section>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    name: 'MerchantDetails',
    computed: {
    ...mapGetters([
      'getMerchantDetails'
    ])
  },
    data: function () {
        return {
            successMessage:""
        }
    },
    props: ['toggleFunction'],
    methods: {
        toogleModalBox () {
           window.console.log(this.getMerchantDetails);
            this.toggleFunction();
        }
    }
}
</script>
<style scoped>
tr{
    text-align: left;
    font-size: 40;
    /* background-color: orange;  */
}
.modal1 {
    position: relative;
}
.modal_background1 {
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7); 
}
.modal_content1 {
    box-sizing: border-box;
    border-radius: 20px;
    background-color: lightblue;
    position: fixed;
    z-index: 100;
    height: 40vh;
    width: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    overflow: hidden;
    font-size: 20px; 
}
.modal_close1 {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: grey;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    cursor: pointer;
}
.modal_close1:hover {
    transform: scale(1.5);
}
</style>