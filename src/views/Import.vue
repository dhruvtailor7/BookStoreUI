<template>
    <main>
    <div>
      <div class="slideshow-container">
        <div class="mySlides">
          <img src="https://cdn.pixabay.com/photo/2015/07/17/22/42/library-849797_960_720.jpg" />
          <div class="mySlides1">
            <q>Memories warm you up from the inside. But they also tear you apart.</q>
            <p class="author">― Haruki Murakami, Kafka on the Shore</p>
          </div>
        </div>
        <div class="mySlides">
          <img src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg" />
          <div class="mySlides1">
            <q>And, when you want something, all the universe conspires in helping you to achieve it.</q>
            <p class="author">― Paulo Coelho, The Alchemist</p>
          </div>
        </div>
        <div class="mySlides">
          <img src="https://cdn.pixabay.com/photo/2014/08/08/21/03/bookshelf-413705_960_720.jpg" />
          <div class="mySlides1">
            <q>We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.</q>
            <p class="author">—J. K. Rowling, Harry Potter and the Order of the Phoenix</p>
          </div>
        </div>
        <a class="prev" @click="plusSlides(-1)">❮</a>
        <a class="next" @click="plusSlides(1)">❯</a>
      </div>
      <div class="dot-container">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>
      <div>
        <p class="genretype">Best Sellers</p>
          <div class="booklist">
        <div v-for="product in topFive" :key="'product:' + product.id" class="books">
        
            <!-- <div v-for="product in topFive" :key="'product:' + product.id" class="books"> -->
              <div>
                <div class="bookimage">
                  <figure @click="routeToProductDescription(product.productId)">
                    <img :src="product.url" style="width:100%;height:100%;object-fit:cover;" class="image" />
                  </figure>
                </div>
                <h5>{{ product.productName }}</h5>
                <h5>{{ product.author }}</h5>
                <h5>{{ product.price }}</h5>
                <!-- <router-link to="/cart" tag="button" class="buy-btn">Add to Cart</router-link> -->
              </div>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </main>
</template>
<script>

import { mapGetters,mapActions } from "vuex";
export default {
  name: "slides",
  computed: {
    ...mapGetters(["genreList", "topFive","selectedProducts","productList"]),
  },
  data() {
    return {
      slideIndex: 1
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
    this.getTopFive()
  },
  methods: {
    ...mapActions([
      'getTopFive'
    ]),
    plusSlides(n) {
      window.console.log("Clicked on slide");
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      window.console.log("Dot clicked");
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },

  routeToProductDescription (id) {
    window.console.log(id)
            this.$store.dispatch('productDetails',
             id
            )
            window.console.log("xx")
            this.$router.push({
                name: 'description',
                params: {
                    id
                },
            }) 
        },

        }
}

</script>
<style>
.slideshow-container {
  position: relative;
  background: #f1f1f1f1;
  margin-top: 10px;
}
.mySlides {
  width: 100%;
  display: none;
  /* padding: 80px; */
  height: 370px;
  text-align: center;
}
.mySlides img {
  width: 100%;
  height: 100%;
}
.mySlides1 {
  background-color: white;
  width: 70%;
  color: black;
  border-radius: 8px;
  opacity: 0.85;
  padding: 10px;
  position: absolute;
  z-index: 500;
  top: 40%;
  left: 15%;
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
  padding: 10px;
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
 box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 10px;
  align-items: center;
}
.books {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  height: 325px;
  width: 200px;
}
.books:hover {
  border: 1px solid #777;
}
.bookimage {
  display: block;
  margin: auto;
  height: 150px;
  width: 100px;
  cursor:pointer;
}
.bookimage:hover {
  transform:scale(1.1)
}
.genretype {
  font-size: 20px;
  margin-left: 30px;
  padding-top: 20px;
}
.buy-btn{
  display: inline;
  background-color: #7DC855;
  border-radius: 4px;
  font-size: 16px;
  color: #FFFFFF;
  padding: 8px 10px;
  transition: all .5s;
  margin-left:auto;
  margin-right:15px;

}
.buy-btn:hover {
  background-color: #64af3d;
}
</style>