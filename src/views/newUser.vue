<template>
 <main>
<body>
    <div class="Newuser">
		<div>
		<input v-model="logintype" type="radio"  name="newuser" value="customer" checked id="typecustomer">
		<label for="typecustomer">Customer</label> <br>

		<input  v-model="logintype" type="radio"  name= "newuser" value="merchant" checked id="typecustomer">
		<label for="typecustomer">merchant</label> <br><br>

	<input  v-model="name"   type="text" placeholder="Name" ><br><br>
	<input  v-model="address" type="text" placeholder="Address"> <br><br>
	<input  v-model="email" type="email" placeholder="Email"> <br><br>
	<input  v-model="phoneNumber" type="text" placeholder="Phone Number"><br><br>
	<input  v-model="pincode" type="number" placeholder="Pincode"> <br><br>
	<input  v-model="password" type="Password" placeholder="Password"><br><br>
	<input  v-model="confirmPassword" type="Password" placeholder="Confirm Password"><br><br>
	<button @click="Submitclicked()">Submit</button>
		</div>
    </div>
	<router-view /> 
</body>
 </main> 
 </template>
 <script>
 export default {
	name: 'signup',
	data: function () {
		return {
			name: '',
			address: '',
			email:'',
			phoneNumber:'',
			pincode:'',
			password:'',
			confirmPassword:'',
			loginType: 'merchant'
		}
	},
	components: {
	},
	methods: {
		Submitclicked (){
			let data = {
				name: this.name,
				address:this.address,
				email:  this.email,
				phoneNumber : this.phone_number,
				pincode : this.pincode,
				password : this.password,
				Confirmpassword : this.confirmPassword,
				loginType: this.loginType
			}
			this.$store.dispatch('NewUser', {
				data: data,
				success: function () {
                    window.console.log('login successful...');
                    
                    
				},
				fail: function () {
					window.console.log('login failed ...');
			}
		})
		}
	}
 }
 </script>
 
 <style>
	
	.Newuser{
		text-align: center;
		background-color:#e9e9e9;;
		margin-left: 35%;
		margin-right: 35%;
		padding-bottom: 30px;
		padding-top: 30px;
		border: 2px solid black;
		border-radius: 20px 20px;
		margin-top: 130px;
		
	}
	.input{
		border: 1px solid black;
	border-radius: 8px;
	display: block;
	margin: 10px auto;
	padding: 5px;
	}
 
 
 </style>