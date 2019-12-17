<template>
  <div>
<section class="container">
<div class="columns is-centered">
  <div class="column is-10">
    <div  class="columns is-centered is-multiline">
      <div class="column is-3" :key="product.id" v-for="product in newlist">

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
    <button v-if="!product.active" @click="add(product)"> add</button>
    <button v-if="product.active" @click="remove(product)"> remove</button>
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
      buttontxt: 'Add To Wishlist',
    }
  },
  computed : {
    newlist () {

      return this.products.map((product)=>{
        if(JSON.parse(localStorage.getItem('wishlist'))==null){
          this.list=[]
          localStorage.setItem('wishlist',JSON.stringify(this.list))
          return {...product,active:false}
        }
        else{

          this.list=JSON.parse(localStorage.getItem('wishlist'))
          console.log(typeof(this.list))
          return (this.list.includes(product.id))?({...product,active:true}):({...product,active:false})

        }
      })

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
    add (product){
        this.list.push(product.id)
        localStorage.setItem('wishlist',JSON.stringify(this.list))

    },
    remove (product){
        this.list.splice( this.list.indexOf(product.id), 1 );
        localStorage.setItem('wishlist',JSON.stringify(this.list))

    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
