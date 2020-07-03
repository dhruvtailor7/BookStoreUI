<template>
  <main>
    <body>
      <div class="Login">
        <h3>LOGIN</h3>
        <div>
          <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" style="margin-top:10%"></div>
          <input
            v-model="username"
            class="username input"
            type="text"
            placeholder="username"
          />
          <input
            v-model="password"
            class="password input"
            type="Password"
            placeholder="Password"
          />
          <div class="typecontainer">
            <div class="type">
              <input
                v-model="loginType"
                type="radio"
                name="login"
                value="customer"
                checked
                id="type-customer"
              />
              <label for="type-customer" style="margin-left: 5px"
                >Customer</label
              >
            </div>
            <div class="type">
              <input
                v-model="loginType"
                type="radio"
                name="login"
                value="merchant"
                checked
                id="type-merchant"
              />
              <label for="type-merchant" style="margin-left: 5px"
                >Merchant</label
              >
            </div>
          </div>
          <div class="Loginbuttoncontainer">
            <button @click="submitClicked" class="submitbutton">Login</button>
          </div>
          <div class="socialloginContainer">
              <Facebook></Facebook>
              <Gmail></Gmail>
          </div>
        </div>
      </div>
      <router-view />
    </body>
  </main>
</template>

<script>
import Facebook from '@/components/Facebook'
import Gmail from '@/components/Gmail'
export default {
 
  name: "login",
  data: function() {
    return {
      username: "",
      password: "",
      loginType: "customer"
    };
  },
  components: {Gmail,Facebook},
  methods: {
    onSignIn:  function(googleUser) {
			var profile = googleUser.getBasicProfile();
			window.console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
			window.console.log('Name: ' + profile.getName());
			window.console.log('Image URL: ' + profile.getImageUrl());
			window.console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present
			
		},
    submitClicked() {
      let self = this
      let data = {
        email: this.username,
        password: this.password,
        loginType: this.loginType
      };
      this.$store.dispatch("loginUser", {
        data: data,
        success: function() {
          if (self.loginType ==='merchant'){
                window.console.log("Here");
                self.$router.push('/MerchantListing')
                window.console.log('login successful...');  
          }
          else if(self.loginType ==='customer') {
                  self.$router.push('/customerpage')
          }
        },
        fail: function() {
          window.console.log("login failed ...");
        }
      });
    }
  }
};
</script>
<style scoped>
.Login {
  background-color: #e9e9e9;
  margin-left: 30%;
  margin-right: 30%;
  padding-bottom: 30px;
  padding-top: 2px;
  padding-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  margin-top: 100px;
}
.input {
  border: 0.5px solid rgba(201, 196, 196, 0.952);
  display: block;
  margin-top: 10px;
  align-self: center;
  width: 90%;
  margin-bottom: 20px;
  padding: 5px;
}
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
}

.typecontainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.type {
  margin: 5px;
}

.submitbutton {
  padding: 10px 30px 10px 30px;
  background-color: #0EA1B6;
  color: white;
  border-radius: 10px;
  cursor: pointer;
transition: all 0.4s ease 0s;
}
.submitbutton:hover{
    background: #0C8699;
}
.Loginbuttoncontainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.socialloginContainer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
