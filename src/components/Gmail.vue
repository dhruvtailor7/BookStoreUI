<template>
  <router-link to="/customerpage"><g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Google
  </g-signin-button></router-link>
</template>
 <script>
 import { mapActions } from 'vuex'
export default {
  data () {
    return {
    googleSignInParams: {
       client_id: '344354043561-2cdqs048ekb362gtagkkad4v64m5fsp6.apps.googleusercontent.com'
    //    client_id: '1036747509060-7coa294fjugf0amod9uh4a4fsnbkhn9g.apps.googleusercontent.com'
      }
     }
  },
  methods:{
    ...mapActions(['sendToken']),
    onSignInSuccess (googleUser)
    {
      var data={'accessToken':googleUser.tc.id_token,'loginType':'customer'}
      window.console.log(googleUser)
      this.$store.dispatch('sendToken',{data})
      setTimeout(3000)
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      window.console.log('OH NOES', error)
    }
}
//}
}
 </script>
 <style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
    border-radius: 10px;
  color: #FFFFFF;
text-decoration: none;
background: #0EA1B6;
padding-top: 12px;
padding-bottom: 12px;
padding-left: 20px;
padding-right: 20px;
cursor: pointer;
transition: all 0.4s ease 0s;
 }
 .g-signin-button:hover{
  border-radius: 10px;
  color: #FFFFFF;
  background: #DE5246;
  border-color: #DE5246;
  transition: all 0.4s ease 0s;
  cursor: pointer;
 }
 
 </style>