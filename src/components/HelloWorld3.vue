<template>
  <div>
    {{countlist}}
<section class="container">
<div class="columns is-centered">
  <div class="column is-10">
    <div  class="columns is-centered is-multiline">
      <div class="column is-3" :key="product.id" v-for="product in newlist2">

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
    <button v-if="!product.active" @click="add_to_cart(product)"> add</button>
    <button v-if="product.active" @click="remove_from_cart(product)"> remove</button>
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
import {mapActions,mapGetters} from 'vuex'
export default {
  data () {
    return {
      products: [],
      list: [],
      isFavorite: false,
      buttontxt: 'Add To Wishlist',
    }
  },
  computed : {
    ...mapGetters(["countlist","newlist"]),
    newlist2 () {
        return this.newlist(this.products)

    }
  },
  components: { buttonX },
  mounted () {

    this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(response => {
      console.log(response)
      this.products = response.data
      console.log(this.newlist)
    })
  },
  methods: {
    ...mapActions(["add_to_cart","remove_from_cart"]),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
