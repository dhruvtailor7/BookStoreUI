<template>
<section class="modal1">
    <div @click="toogleModalBox" class="modal_background1"></div>
    <div class="modal_content1">
        <span @click="toogleModalBox" class="modal_close1">X</span>
        <form id="myform" method="post">
            <fieldset>
                <legend>Add New Product</legend>
            <label>Product Name</label>
            <input id="ProductName" type="text" v-model="product.productName" required />
            <br><br>
            <label>Author</label>
            <input type="text" id="author"  v-model="product.author" required />
            <br><br>
            <label>Price</label>
            <input id="Price" type="double" v-model="product.price" required />
            <br><br>
            <label> Product Logo </label>
            <input id="logo" type="text" v-model="product.url" required/>
            <button id="upload">Upload</button>
            <br><br>
            <label> Genre </label>
            <input id="genre" type="text" v-model="product.genre" required/>
            <br><br>
            <label> Publisher Name </label>
            <input id="Publisher" type="text" v-model="product.attributes.publisher" required/>
            <br><br>
            <label> Year Of Publishing </label>
            <input id="YearoOfPublishing" type="number" v-model="product.attributes.year" required/>
            <br><br>
            <label> Binding Type </label>
            <input id="BindType" type="text" v-model="product.attributes.binding" required/>
            <br><br>
            <label>Quantity</label>
            <input type="number" id="quantity" v-model="product.quantity" required/>
            <br><br>
            <label>Description</label>
            <textarea v-model="product.description" required></textarea>
            <br><br>
            <label> ISBN </label>
            <input ID="isbn" type="number" v-model="product.isbn" required/>
            <br><br>
            <label>Number Of Pages</label>
            <input type="number" v-model="product.attributes.noofpages" required/> <br> <br>
            <button style="font-size:20px" id="save" @click="saveProduct">Save</button>
            </fieldset>
        </form>
    </div>
</section>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    name: 'Addproduct',
    data: function () {
        return {
            product: {
                merchantId: '',
                productName: 'My Product',
                author: 'Prakriti Tiwari',
                price: '20',
                url: "",
                genre: 'fiction',
                description: 'cvc',
                attributes: {
                publisher: "xyz",
                year: '2000',
                noofpages: '100',
                binding: 'soft',
                } ,
                quantity: '2',
                isbn: '22345',
            },
            successMessage:""
        }
    },
     computed:{
        ...mapGetters([
            'getmerchantid',
        ])
    },
    methods: {
        saveProduct(event){
            window.console.log(this.getmerchantid)
            let data = {...this.product}
           // window.console.log(this.getmerchantid)
            data.merchantId=localStorage.getItem('isLogged')
            event.preventDefault();
            event.stopPropagation();
            this.$store.dispatch('addNewProduct', {
                data: data,
                success: this.addNewProductSuccess
            })
        },
        addNewProductSuccess (res) {
            // eslint-disable-next-line no-console
            this.successMessage = res
            alert("product added successfully")
            this.$router.push('/MerchantListing')
        },
        toogleModalBox () {
            this.$router.push("/MerchantListing")
        }
    }
}
</script>
<style scoped>
    form{
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
    height: 100vh;
    width: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    overflow: hidden;
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