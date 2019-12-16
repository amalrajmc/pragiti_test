<template>
  <div>
<section class="container">
<div class="columns is-centered">
  <div class="column is-10">
    <div  class="columns is-centered is-multiline">
      <div class="column is-3" :key="product.id" v-for="product in products">

        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="product.url" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content" style="height:100%!important;">
<h1 class="title is-size-4" style="height:150px;overflow:hidden;">{{product.title}}</h1>
<h1 class="subtitle" style="background:white;">{{product.id}}</h1>
  </div>
  <footer class="card-footer">

  <buttonX :product="product" ></buttonX>
</footer>
</div>

  </div>
  </div>
  </div>
  </div>
</section>
  </div>
</template>

<script>
import buttonX from './fav.vue'
export default {
  data () {
    return {
      products: [],
      list: [],
      isFavorite: false,
      buttontxt: 'Add To Wishlist'
    }
  },
  components: { buttonX },
  mounted () {
    this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(response => {
      console.log(response)
      this.products = response.data
    })
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
