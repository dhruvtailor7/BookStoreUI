<template>
  <main>
  <div id="app">
    <nav id="nav">
      <!-- <Navbar /> -->
    </nav>
    <!-- <Sidebar/> -->
    <router-view/>
  </div>
  </main>
</template>
 
<script>
// import Navbar from '@/components/App/Navbar'
// // import Genre from '@/views/Genre'


// import Sidebar from '@/components/Sidebar'
// //import Home from '@/views/Home'

export default {
  name: 'App',
  components: {
    // Navbar, Sidebar
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#aside {
  padding:30px; 

}
#header {
  
  text-decoration-color: red; 
  
}
#nav {
  /* height: 80px; */

  text-align: left; 

}

#nav1 {
  font-weight: bold;
  color: #2c3e50;
  align-items: left; 
  text-align: left; 
  padding:30px; 
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page_headers {
  display: block;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  background-color: white;
  margin: 0px;
  padding: 15px 0px;
  font-size: 1.5rem;
}

.test {
  border: 1px solid red;
}
</style>
