<template>
  <main>
      <!-- <nav id="CustomerNavbar" class="CustomerNavbar">
        <section class="navbar_division left">
            <router-link :to="{name: 'Home'}" tag="span">
                <img class="navbar_logo" src="@/assets/bookslogo.png" alt="logo">
            </router-link>
        </section>
        <section class="navbar_division center">
            <input type = "text" v-model="searchTerm" placeholder="   search..." class="navbar_searchBar">
            <button @click ="searchListMethod" class="navbar_route">Search <img src="@/assets/search.png" height="16px" width="16px"></button>
        </section>
        <section class="navbar_division right">
            <router-link to="/customerprofile" class="navbar_route" tag="button"> My Profile<img src="@/assets/login.png" height="16px" width="16px"></router-link>
            <router-link to="/signout" class="navbar_newuser" tag="button">Sign Out<img src="@/assets/new.png" height="16px" width="16px"></router-link>
            <router-link to="/cart" class="navbar_route" tag="button">Cart <img src="@/assets/shopping.png" height="16px" width="16px"></router-link>
        </section>
    </nav> -->
    <NavBar/>
    <Sidebar/>
    <Import/>
   </main>
   </template>
   <script>
   import Import from "@/views/Import"
   import Sidebar from "@/components/Sidebar";
   import NavBar from '../components/CustomerNavbar.vue'

   export default {
    components:{ NavBar,Sidebar, Import } 
   }
   </script>
<style lang="scss" scoped>
.navbar {
    //sbackground-color: whitesmoke
    background-color: white !important;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    position:fixed;
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
        background-color: #0EA1B6;
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
        background-color: #0EA1B6;
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
.slideshow-container {
  position: relative;
  background: #F1F1F1F1;
  margin-top: 42px;
}
.mySlides {
  width: 100%;
  display: none;
  padding: 80px;
  text-align: center;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next {
  position: absolute;
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
.dot-container {
  text-align: center;
  padding: 20px;
  background: #ddd;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active,
.dot:hover {
  background-color: #717171;
}
q {
  font-style: italic;
}
.author {
  color: cornflowerblue;
}
.booklist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
}
.books {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 30px;
}
.books:hover {
  border: 1px solid #777;
}
.bookimage {
  display: block;
  margin: auto;
  height: 150px;
  width: 100px;
}
.genretype {
  font-size: 20px;
  margin-left: 30px;
  padding-top: 20px;
}
</style>