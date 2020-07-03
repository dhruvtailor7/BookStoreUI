<template>
<div>
  
    <div id="fb-root"></div>

    <router-link to="/customerpage"><div class="fb-login-button" data-size="small" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" data-width=""></div></router-link>
</div>

</template>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=748939595846720&autoLogAppEvents=1"></script>
<script>
 window.FB.getLoginStatus(function(response) {
    console.log(response);
});
import facebookLogin from 'facebook-login-vuejs';
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    }
  },
  components:{facebookLogin}
  ,

  methods: {
   
    onSignInSuccess (response) {
      window.FB.api('/me', dude => {
        window.console.log(`Good to see you, ${dude.name}.`)
      })
      window.console.log(response)
    },
    onSignInError (error) {
      window.console.log('OH NOES', error)
    }
  }
}
</script>
<script src='/Users/dhruvhemanttailor/Documents/BookStore/UI/src/js/fb-sdk.js'>
</script>
    
<style scoped>
.fb-signin-button {
  display: inline-block;
    border-radius: 10px;
  color: #FFFFFF;
text-decoration: none;
background: #0EA1B6;
padding: 12px;
transition: all 0.4s ease 0s;
margin-right: 50px;
margin-left: -25px;
align-self: center;
}
.fb-signin-button:hover{
  border-radius: 10px;
  color: #FFFFFF;
  background: #3B5998;
  border-color: #3B5998;
  transition: all 0.4s ease 0s;
  cursor: pointer;
}
</style>