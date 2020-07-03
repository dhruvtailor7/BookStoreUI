<template>
  <main>
    <body>
      <div class="Newuser">
        <div>
          <div class="typecontainer">
            <div class="type">
              <input
                v-model="loginType" type="radio" name="login" value="customer" checked id="type-customer"
              />
              <label for="type-customer" style="margin-left: 5px">Customer</label>
            </div>
            <div class="type">
              <input
                v-model="loginType" type="radio" name="login" value="merchant" checked id="type-merchant"/>
              <label for="type-merchant" style="margin-left: 5px">Merchant</label>
            </div>
          </div>

          <input
            v-model="name"
            type="text"
            placeholder="Name"
            class="username input"
          />
          <input
            v-model="address"
            type="text"
            placeholder="Address"
            class="username input"
          />
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="username input"
          />
          <input
            v-model="phoneNumber"
            type="number"
            placeholder="Phone Number"
            class="username input"
          />
          <input
            v-model="pincode"
            type="number"
            placeholder="Pincode"
            class="username input"
          />

          <input
            v-model="password"
            type="Password"
            placeholder="Password"
            class="username input"
          />
          <input
            v-model="confirmPassword"
            type="Password"
            placeholder="Confirm Password"
            class="username input"
          />
          <div class="Loginbuttoncontainer">
            <button @click="Submitclicked()" class="submitbutton">
              Submit
            </button>
          </div>
        </div>
      </div>
      <router-view />
    </body>
  </main>
</template>
<script>
export default {
  name: "signup",
  data: function() {
    return {
      name: "",
      address: "",
      email: "",
      phoneNumber: "",
      pincode: "",
      password: "",
      confirmPassword: "",
      loginType: "customer"
    };
  },
  components: {},
  methods: {
    Submitclicked() {
      let data = {
        name: this.name,
        address: this.address,
        email: this.email,
        phoneNumber: this.phone_number,
        pincode: this.pincode,
        password: this.password,
        Confirmpassword: this.confirmPassword,
        loginType: this.loginType
      };
      this.$store.dispatch("NewUser", {
        data: data,
        success: function() {
          window.console.log("login successful...");
        },
        fail: function() {
          window.console.log("login failed ...");
        }
      });
    }
  }
};
</script>

<style>
.Newuser {
  background-color: #e9e9e9;
  margin-left: 30%;
  margin-right: 30%;
  padding-bottom: 30px;
  padding-top: 10px;
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
	background-color: #0ea1b6;
	color: white;
}
.Loginbuttoncontainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
